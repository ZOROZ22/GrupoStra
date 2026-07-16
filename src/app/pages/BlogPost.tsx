import { useParams, Link } from "react-router";
import { ArrowLeft, Calendar, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { BLOG_POSTS } from "../data/catalog";
import { Button } from "../components/ui/button";

export default function BlogPost() {
  const { id } = useParams();
  const postIndex = BLOG_POSTS.findIndex((p) => p.id === Number(id));
  const post = postIndex >= 0 ? BLOG_POSTS[postIndex] : BLOG_POSTS[0];
  const related = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  const categories = ["Lançamentos", "Eventos e Feiras", "Treinamentos", "Artigos Científicos", "Institucional"];
  const postCategory = categories[(postIndex >= 0 ? postIndex : 0) % categories.length];

  const contentByCategory: Record<string, { intro: string; body: string; heading: string; body2: string; quote: string }> = {
    "Lançamentos": {
      intro: `Descubra tudo sobre "${post.title}" — uma das mais recentes inovações trazidas pelo Grupo Stra para o mercado brasileiro de saúde. Este lançamento representa um avanço significativo em tecnologia e eficiência para profissionais e instituições de saúde.`,
      heading: "Tecnologia de ponta para o mercado brasileiro",
      body: "O Grupo Stra tem investido continuamente na curadoria das melhores marcas globais para trazer ao Brasil soluções que atendem às demandas mais exigentes do setor. Este novo lançamento foi desenvolvido com foco em precisão, facilidade de uso e integração com fluxos de trabalho existentes.",
      body2: "Entre em contato com nossos especialistas para agendar uma demonstração personalizada e conhecer de perto as vantagens deste produto para a sua instituição.",
      quote: "Inovação e qualidade são os pilares que sustentam cada novo produto que levamos ao mercado.",
    },
    "Eventos e Feiras": {
      intro: `O Grupo Stra marcou presença com destaque: "${post.title}". Nossa participação reforça o compromisso da empresa com a presença ativa nos principais eventos do setor de saúde no Brasil e no mundo.`,
      heading: "Presença estratégica no setor de saúde",
      body: "Durante o evento, nossa equipe apresentou as tecnologias mais recentes do portfólio, estabeleceu novas parcerias comerciais e fortaleceu o relacionamento com clientes de todas as regiões do país. A participação em feiras e congressos é parte fundamental da estratégia do Grupo Stra para entender as necessidades do mercado e antecipar tendências.",
      body2: "Fique atento às próximas edições e eventos em que estaremos presentes. Acompanhe nossas redes sociais para não perder nenhuma atualização.",
      quote: "Cada feira é uma oportunidade de conectar tecnologia e pessoas em prol da saúde.",
    },
    "Treinamentos": {
      intro: `"${post.title}" é parte do programa Stra Academy, que visa capacitar profissionais de saúde com treinamentos práticos e conteúdo atualizado sobre as melhores práticas do setor.`,
      heading: "Capacitação que transforma resultados",
      body: "O programa de treinamentos do Grupo Stra é reconhecido pela qualidade técnica e pela abordagem prática. Nossos instrutores são especialistas com vasta experiência de campo, garantindo que cada sessão traga conhecimento aplicável no dia a dia. Oferecemos treinamentos presenciais e online para atender profissionais de todo o Brasil.",
      body2: "Inscreva-se nos próximos treinamentos disponíveis ou entre em contato para solicitar uma sessão exclusiva para sua equipe.",
      quote: "Investir em capacitação é investir na qualidade do atendimento ao paciente.",
    },
    "Artigos Científicos": {
      intro: `"${post.title}" traz uma análise aprofundada sobre avanços tecnológicos e científicos que estão transformando diagnósticos e tratamentos. O Grupo Stra acompanha de perto as publicações e inovações mais relevantes do setor.`,
      heading: "Ciência aplicada à rotina clínica",
      body: "A base científica por trás de cada solução que oferecemos é o que garante resultados confiáveis e reprodutíveis. Nosso time técnico acompanha publicações internacionais e participa de grupos de pesquisa para validar e aprimorar continuamente os produtos e protocolos que recomendamos aos nossos clientes.",
      body2: "Acesse nossa biblioteca de conteúdo técnico para encontrar mais artigos, whitepapers e estudos de caso sobre as tecnologias do nosso portfólio.",
      quote: "A evidência científica é o alicerce de toda boa decisão clínica.",
    },
    "Institucional": {
      intro: `"${post.title}" destaca mais um marco importante na trajetória do Grupo Stra. Com mais de 15 anos de mercado, a empresa continua expandindo sua atuação e reforçando seu compromisso com a saúde brasileira.`,
      heading: "Crescimento com propósito",
      body: "Nascida em 2009, o Grupo Stra cresceu de forma sustentável e agressiva, sempre guiada pelos valores de inovação, qualidade e valorização do capital humano. Atuamos nos segmentos hospitalar, laboratorial, veterinário e farma, levando soluções completas para instituições de saúde em todo o Brasil.",
      body2: "Conheça mais sobre nossa história, nossos valores e o time que faz tudo isso acontecer visitando a página institucional.",
      quote: "Nosso compromisso é entregar saúde e bem-estar em todo Brasil, valorizando o capital humano. Desafio é o que nos move.",
    },
  };

  const content = contentByCategory[postCategory] || contentByCategory["Institucional"];

  return (
    <div className="bg-white pb-24">
      {/* Hero Header */}
      <div className="max-w-[1000px] mx-auto px-4 pt-12 pb-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-stra-teal font-medium mb-8 transition-colors">
          <ArrowLeft className="size-4" /> Voltar para o Blog
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium text-gray-500 mb-6">
          <span className="flex items-center gap-1.5"><Calendar className="size-4 text-stra-teal" /> {post.date}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <span className="text-stra-teal">{postCategory}</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stra-navy leading-tight mb-8">
          {post.title}
        </h1>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 mb-16">
        <div className="aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-100">
          <img src={post.image} alt={post.title} className="size-full object-cover" />
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 grid lg:grid-cols-[1fr_240px] gap-12">
        {/* Content */}
        <article className="prose prose-lg max-w-none prose-headings:text-stra-navy prose-a:text-stra-teal">
          <p className="text-xl text-gray-600 leading-relaxed font-medium mb-8">
            {content.intro}
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            {content.body}
          </p>
          <h3 className="text-2xl font-bold text-stra-navy mt-10 mb-4">{content.heading}</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            {content.body2}
          </p>
          <div className="bg-gray-50 border-l-4 border-stra-teal p-6 rounded-r-xl my-10 italic text-gray-700 font-medium">
            "{content.quote}"
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            Para conhecer mais sobre as tecnologias apresentadas neste artigo, visite nosso catálogo online ou agende uma demonstração com nossos especialistas. A equipe do Grupo Stra está sempre pronta para entender a sua necessidade e propor a melhor solução.
          </p>
        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="sticky top-28">
            <h4 className="font-bold text-stra-navy mb-4 flex items-center gap-2">
              <Share2 className="size-4 text-stra-teal" /> Compartilhar
            </h4>
            <div className="flex flex-col gap-3">
              <Button variant="outline" className="justify-start gap-3 border-gray-200 text-gray-600 hover:text-[#0A66C2]">
                <Linkedin className="size-4" /> LinkedIn
              </Button>
              <Button variant="outline" className="justify-start gap-3 border-gray-200 text-gray-600 hover:text-[#1877F2]">
                <Facebook className="size-4" /> Facebook
              </Button>
              <Button variant="outline" className="justify-start gap-3 border-gray-200 text-gray-600 hover:text-[#1DA1F2]">
                <Twitter className="size-4" /> Twitter
              </Button>
            </div>
          </div>
        </aside>
      </div>

      {/* Read More */}
      <div className="bg-gray-50 py-20 mt-20 border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4">
          <h3 className="text-3xl font-bold text-stra-navy mb-10 text-center">Leia Também</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link key={p.id} to={`/blog/${p.id}`} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                  <img src={p.image} alt={p.title} className="size-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-stra-teal mb-3">{p.date}</p>
                  <h4 className="text-lg font-bold text-stra-navy leading-snug group-hover:text-stra-teal transition-colors line-clamp-2">
                    {p.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
