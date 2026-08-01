import React from 'react';
import { FileText, Download, ExternalLink, ShieldCheck } from 'lucide-react';

export default function ResumeView() {
  return (
    <div className="h-full flex flex-col justify-between space-y-4 font-terminal text-black text-base md:text-lg">
      {/* Top Controls Bar */}
      <div className="panel-outset p-3 bg-win95-surface border-2 border-black flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-red-700" />
          <div>
            <span className="font-bold text-gray-900 font-terminal">Saksham_Kumar_Resume.pdf</span>
            <div className="text-xs text-gray-600 font-pixel">SIZE: 509 KB | VERIFIED DOCUMENT</div>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <a
            href="/Saksham_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-win95 px-3 py-1.5 font-pixel text-xs flex items-center justify-center gap-1.5 hover:bg-gray-200"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open Tab</span>
          </a>

          <a
            href="/Saksham_Kumar_Resume.pdf"
            download="Saksham_Kumar_Resume.pdf"
            className="btn-win95 bg-emerald-700 text-white font-pixel text-xs px-3 py-1.5 flex items-center justify-center gap-1.5 hover:bg-emerald-800"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* PDF Container View */}
      <div className="flex-1 panel-inset p-1 bg-gray-800 min-h-[400px] flex flex-col border border-black">
        <iframe 
          src="/Saksham_Kumar_Resume.pdf" 
          title="Saksham Kumar Resume PDF"
          className="w-full flex-1 min-h-[380px] bg-white border-0"
        />
      </div>

      {/* Footer Info */}
      <div className="panel-outset p-2 bg-win95-surface text-xs font-terminal text-gray-800 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>Extracted directly from original resume document.</span>
        </div>
        <span className="font-pixel text-[10px] text-blue-900">SAKSHAM KUMAR (2026)</span>
      </div>
    </div>
  );
}
