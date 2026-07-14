import { COMPANY } from "../../data/catalog";

export function WhatsAppButton({ message = "Olá! Gostaria de falar com um especialista do Grupo Stra." }: { message?: string }) {
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white pl-3 pr-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
    >
      <img src={COMPANY.whatsIcon} alt="WhatsApp" className="size-6" />
      <span className="hidden sm:inline text-sm">Fale com um especialista</span>
    </a>
  );
}
