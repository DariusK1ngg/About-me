"use client";

import { useState } from "react";
import { Code2, Check, Copy, Database, Zap } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

// Syntax highlighter function for code blocks
function highlightCode(code: string, type: "plsql" | "python" | "typescript") {
  const lines = code.split("\n");

  return lines.map((line, lIdx) => {
    // Comment line
    if (line.trim().startsWith("--") || line.trim().startsWith("#") || line.trim().startsWith("//")) {
      return (
        <div key={lIdx} className="text-slate-500 italic">
          {line}
        </div>
      );
    }

    // Tokenize line words for syntax coloring
    const tokens = line.split(/(\s+|,|\(|\)|:|;|=|>|<|\+|-|\*|\/)/);

    const plsqlKeywords = ["DECLARE", "BEGIN", "END", "SELECT", "INTO", "FROM", "WHERE", "IF", "THEN", "EXCEPTION", "WHEN", "RAISE", "PACKAGE", "BODY", "PROCEDURE", "IS", "CURSOR", "LOOP", "EXIT", "BULK", "COLLECT", "LIMIT", "OPEN", "FETCH", "CLOSE", "HAVING", "GROUP", "BY", "ORDER", "JOIN", "ON", "BETWEEN", "AND", "AS", "COUNT", "SUM"];
    const pythonKeywords = ["from", "import", "class", "def", "async", "await", "return", "if", "not", "raise", "pass", "with", "as"];
    const tsKeywords = ["import", "from", "export", "async", "function", "const", "let", "var", "return", "await", "new"];

    return (
      <div key={lIdx}>
        {tokens.map((token, tIdx) => {
          const upper = token.toUpperCase();
          const cleanToken = token.trim();

          if (type === "plsql" && plsqlKeywords.includes(upper)) {
            return <span key={tIdx} className="text-[#F97316] font-bold">{token}</span>; // Amber/Orange
          }
          if (type === "python" && pythonKeywords.includes(token)) {
            return <span key={tIdx} className="text-[#38BDF8] font-bold">{token}</span>; // Cyan
          }
          if (type === "typescript" && tsKeywords.includes(token)) {
            return <span key={tIdx} className="text-[#C084FC] font-bold">{token}</span>; // Purple
          }

          // String literals
          if ((token.startsWith("'") && token.endsWith("'")) || (token.startsWith('"') && token.endsWith('"'))) {
            return <span key={tIdx} className="text-[#34D399]">{token}</span>; // Green
          }

          // Numbers
          if (!isNaN(Number(cleanToken)) && cleanToken !== "") {
            return <span key={tIdx} className="text-[#FACC15]">{token}</span>; // Yellow
          }

          // Default text
          return <span key={tIdx}>{token}</span>;
        })}
      </div>
    );
  });
}

export default function CodeWorkbench() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"validation" | "report" | "automation">("validation");
  const [copied, setCopied] = useState(false);

  const tabOptions = [
    { id: "validation", label: language === "es" ? "Trigger PL/SQL vs FastAPI" : "PL/SQL Trigger vs FastAPI" },
    { id: "report", label: language === "es" ? "Oracle Reports vs API REST" : "Oracle Reports vs REST API" },
    { id: "automation", label: language === "es" ? "Automatización & Scripts" : "Automation & Scripts" },
  ];

  const codeData = {
    validation: {
      oracleTitle: language === "es" ? "Oracle Forms: Trigger de Validación (PL/SQL)" : "Oracle Forms: Validation Trigger (PL/SQL)",
      oracleCode: `-- Trigger en Bloque Oracle Forms: CLIENT_ORDER
DECLARE
   v_credit_limit NUMBER(12,2);
   v_total_due     NUMBER(12,2);
BEGIN
   SELECT credit_limit, current_balance 
     INTO v_credit_limit, v_total_due
     FROM customer_master
    WHERE customer_id = :CLIENT_ORDER.CUST_ID;

   IF (v_total_due + :CLIENT_ORDER.AMOUNT) > v_credit_limit THEN
      MESSAGE('EXCEEDED_CREDIT_LIMIT: Cliente excede límite');
      RAISE FORM_TRIGGER_FAILURE;
   END IF;
EXCEPTION
   WHEN NO_DATA_FOUND THEN
      MESSAGE('CUSTOMER_NOT_FOUND: Cliente inválido');
      RAISE FORM_TRIGGER_FAILURE;
END;`,
      modernTitle: language === "es" ? "Backend Moderno: FastAPI + Validación Async (Python)" : "Modern Backend: FastAPI + Async Validation (Python)",
      modernCode: `# Endpoint FastAPI + Validación Asíncrona
from fastapi import APIRouter, HTTPException, Depends
from typing import Optional
from sqlalchemy.ext.asyncio import AsyncSession

router = APIRouter(prefix="/api/v1/orders", tags=["Orders"])

@router.post("/")
async def create_order(customer_id: int, amount: float, db: AsyncSession = Depends(get_db)):
    customer = await db.get(Customer, customer_id)
    if not customer:
        raise HTTPException(status_code=404, detail="CUSTOMER_NOT_FOUND")
    
    if (customer.balance + amount) > customer.credit_limit:
        raise HTTPException(status_code=400, detail="EXCEEDED_CREDIT_LIMIT")

    return await create_order_service(db, customer_id, amount)`,
      oracleType: "plsql" as const,
      modernType: "python" as const,
    },

    report: {
      oracleTitle: language === "es" ? "Oracle Reports: Consulta Matricial (PL/SQL)" : "Oracle Reports: Matrix Query (PL/SQL)",
      oracleCode: `-- Consulta del Modelo de Datos en Oracle Reports
SELECT c.cust_name,
       p.product_code,
       SUM(o.quantity * o.unit_price) AS total_sales,
       COUNT(o.order_id) AS total_orders
  FROM customers c
  JOIN orders o ON c.cust_id = o.cust_id
  JOIN order_items p ON o.order_id = p.order_id
 WHERE o.order_date BETWEEN :P_START_DATE AND :P_END_DATE
 GROUP BY c.cust_name, p.product_code
 HAVING SUM(o.quantity * o.unit_price) > :P_MIN_AMOUNT
 ORDER BY total_sales DESC;`,
      modernTitle: language === "es" ? "Ruta API Next.js + Agregaciones SQL (TypeScript)" : "Next.js API Route + SQL Aggregates (TypeScript)",
      modernCode: `// Ruta API en Next.js con agregación relacional
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const startDate = new Date(searchParams.get("start") || Date.now());
  const endDate = new Date(searchParams.get("end") || Date.now());

  const reportData = await prisma.salesAggregate.groupBy({
    by: ['customerName', 'productCode'],
    _sum: { totalAmount: true },
    _count: { orderId: true },
    where: { date: { gte: startDate, lte: endDate } },
    orderBy: { _sum: { totalAmount: 'desc' } }
  });

  return NextResponse.json({ success: true, data: reportData });
}`,
      oracleType: "plsql" as const,
      modernType: "typescript" as const,
    },

    automation: {
      oracleTitle: language === "es" ? "Paquete Oracle PL/SQL: Procesamiento Bulk" : "Oracle PL/SQL Package: Bulk Processing",
      oracleCode: `-- Paquete Empresarial en PL/SQL
PACKAGE BODY enterprise_data_processor IS
   PROCEDURE process_customers IS
      CURSOR c_cust IS SELECT * FROM enterprise_customers;
      TYPE t_cust IS TABLE OF c_cust%ROWTYPE;
      v_data t_cust;
   BEGIN
      OPEN c_cust;
      LOOP
         FETCH c_cust BULK COLLECT INTO v_data LIMIT 1000;
         EXIT WHEN v_data.COUNT = 0;
         -- Procesamiento empresarial de datos
      END LOOP;
      CLOSE c_cust;
   END process_customers;
END enterprise_data_processor;`,
      modernTitle: language === "es" ? "Script de Integración Asíncrona (Python)" : "Async Integration Script (Python)",
      modernCode: `# Script de Procesamiento de Datos Asíncrono
import asyncpg
import asyncio
import pandas as pd

async def process_batch_data(oracle_dsn: str, pg_dsn: str):
    pg_pool = await asyncpg.create_pool(pg_dsn)
    
    # Lectura y transformación de datos relacionales
    df = pd.read_sql("SELECT * FROM enterprise_customers", oracle_dsn)
    df['email'] = df['email'].str.lower().strip()
    df['updated_at'] = pd.to_datetime('now')

    # Inserción masiva en PostgreSQL
    async with pg_pool.acquire() as conn:
        records = [tuple(x) for x in df.to_numpy()]
        await conn.copy_records_to_table('customers', records=records)

asyncio.run(process_batch_data(ORACLE_DSN, PG_DSN))`,
      oracleType: "plsql" as const,
      modernType: "python" as const,
    },
  };

  const currentSnippet = codeData[activeTab];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="flex flex-col gap-6 my-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-cyber-cyan font-bold text-xs uppercase tracking-widest">
            <Code2 size={14} />
            <span>{language === "es" ? "Laboratorio de Código Real" : "Real Code Workbench"}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">
            {language === "es" ? "Comparador Técnico: PL/SQL vs Stack Moderno" : "Technical Comparison: PL/SQL vs Modern Stack"}
          </h2>
        </div>

        {/* Tab Switcher (Solid colors, main sans font) */}
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-1 rounded-xl overflow-x-auto">
          {tabOptions.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-tight transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-cyber-cyan text-slate-950"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Workbench Grid side-by-side with Syntax Highlighting */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Box: Oracle PL/SQL */}
        <div className="bg-[#0B0F17] border border-oracle-amber/30 rounded-2xl overflow-hidden flex flex-col">
          <div className="bg-[#140F0A] px-4 py-2.5 border-b border-oracle-amber/20 flex items-center justify-between">
            <div className="flex items-center gap-2 text-oracle-amber text-xs font-bold tracking-tight">
              <Database size={14} />
              <span>{currentSnippet.oracleTitle}</span>
            </div>
            <span className="text-[10px] font-bold text-oracle-amber/80 uppercase tracking-wider">ORACLE PL/SQL</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed bg-[#070A10]">
            <code>{highlightCode(currentSnippet.oracleCode, currentSnippet.oracleType)}</code>
          </pre>
        </div>

        {/* Right Box: Modern FastAPI / Python / TS */}
        <div className="bg-[#0B0F17] border border-cyber-cyan/30 rounded-2xl overflow-hidden flex flex-col">
          <div className="bg-[#0A1420] px-4 py-2.5 border-b border-cyber-cyan/20 flex items-center justify-between">
            <div className="flex items-center gap-2 text-cyber-cyan text-xs font-bold tracking-tight">
              <Zap size={14} />
              <span>{currentSnippet.modernTitle}</span>
            </div>
            <button
              onClick={() => handleCopy(currentSnippet.modernCode)}
              className="text-slate-400 hover:text-cyber-cyan text-xs font-bold tracking-tight flex items-center gap-1"
            >
              {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              <span>{copied ? (language === "es" ? "Copiado" : "Copied") : (language === "es" ? "Copiar" : "Copy")}</span>
            </button>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed bg-[#070A10]">
            <code>{highlightCode(currentSnippet.modernCode, currentSnippet.modernType)}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
