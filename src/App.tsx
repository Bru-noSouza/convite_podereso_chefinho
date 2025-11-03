import { Calendar, Clock, MapPin, Gift, MessageCircle } from 'lucide-react';

function App() {
  const data = {
    hero: {
      titulo: "365 Sorrisos",
      subtitulo: "Poderoso Chefinho em ação!",
      nome_aniversariante: "NOME DA CRIANÇA",
      idade_label: "1 aninho"
    },
    evento: {
      data: "DD/MM/AAAA",
      dia_semana: "Domingo",
      hora: "17:00"
    },
    contato: {
      telefone_display: "85 92186-6156",
      whatsapp_link: "https://wa.me/5585921866156?text=Ol%C3%A1!%20Quero%20confirmar%20minha%20presen%C3%A7a%20no%20anivers%C3%A1rio."
    },
    local: {
      endereco_texto: "Rua José Rufino, nº 192 — Bairro Cajueiro da Malhada",
      maps_link: "https://www.google.com/maps/search/?api=1&query=Rua%20Jos%C3%A9%20Rufino%2C%20192%20-%20Cajueiro%20da%20Malhada"
    },
    sugestoes_presentes: [
      "Roupas tam. 2",
      "Calçados nº 20",
      "Amo Brinquedos",
      "Produtos de higiene"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-orange-50">
      <div className="max-w-4xl mx-auto">
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 text-white px-6 py-16 md:py-24">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400 rounded-full opacity-20 -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-700 rounded-full opacity-20 -ml-24 -mb-24"></div>

          <div className="relative z-10 text-center">
            <div className="inline-block mb-6">
              <img
                src="/D_Q_NP_2X_871655-MLB89176809028_082025-V.webp"
                alt="Boss Baby"
                className="w-48 h-48 rounded-full shadow-2xl object-cover"
              />
            </div>

            <p className="text-2xl md:text-3xl mb-8 font-semibold text-sky-100">
              {data.hero.subtitulo}
            </p>

            <div className="bg-white/95 backdrop-blur-sm text-sky-600 py-6 px-8 rounded-2xl shadow-2xl inline-block mb-4">
              <p className="text-xl md:text-2xl font-bold mb-2">
                {data.hero.nome_aniversariante}
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  1
                </div>
                <span className="text-3xl font-bold text-orange-500">
                  {data.hero.idade_label}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-12 bg-white">
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl border-2 border-sky-200 transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Data</h3>
              <p className="text-gray-600 font-semibold">{data.evento.dia_semana}</p>
              <p className="text-sky-600 font-bold text-lg">{data.evento.data}</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border-2 border-orange-200 transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Horário</h3>
              <p className="text-orange-600 font-bold text-2xl">{data.evento.hora}</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Local</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {data.local.endereco_texto}
              </p>
            </div>
          </div>
        </section>

        <section id="presentes" className="px-6 py-12 bg-gradient-to-br from-orange-50 to-sky-50">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-400 rounded-full mb-6 shadow-lg">
              <Gift className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
              Sugestões de Presentes
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Sua presença já é o melhor presente, mas se quiser presentear:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {data.sugestoes_presentes.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-lg"
                >
                  <p className="text-gray-800 font-semibold text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-white">
          <div className="max-w-lg mx-auto space-y-4">
            <a
              href={data.contato.whatsapp_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-8 rounded-xl shadow-lg transition-all hover:shadow-xl hover:scale-105 text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Confirme sua presença
            </a>

            <a
              href={data.local.maps_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-5 px-8 rounded-xl shadow-lg transition-all hover:shadow-xl hover:scale-105 text-lg"
            >
              <MapPin className="w-6 h-6" />
              Veja a localização
            </a>

            <a
              href="#presentes"
              className="flex items-center justify-center gap-3 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-5 px-8 rounded-xl shadow-lg transition-all hover:shadow-xl hover:scale-105 text-lg"
            >
              <Gift className="w-6 h-6" />
              Sugestões de presentes
            </a>
          </div>
        </section>

        <footer className="bg-gradient-to-r from-sky-500 to-blue-600 text-white text-center py-8 px-6">
          <div className="text-4xl mb-3">🎉</div>
          <p className="text-lg font-semibold mb-2">
            Contamos com sua presença!
          </p>
          <p className="text-sky-100">
            Contato: {data.contato.telefone_display}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
