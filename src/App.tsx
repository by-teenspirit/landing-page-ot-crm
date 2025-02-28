import React from "react";
import {
  BarChart3,
  Mails,
  Heart,
  NotebookPen,
  MessageSquare,
  Rocket,
  Users,
  Handshake,
  ArrowLeftRight,
  ClipboardPlus,
  Star,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-blue-600 bg-blue" />
              <span className="text-xl font-bold text-gray-900">OT-CRM</span>
            </div>
            <a href="mailto:contact@jlconsulting.fr">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Contactez-nous
              </button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Le CRM et l'application mobile qui révolutionnent la gestion de
              votre Office de Tourisme
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Simplifiez votre gestion touristique : centralisez vos contacts,
              organisez les séminaires, planifiez les guides et pilotez
              adhésions, devis et campagnes marketing en toute fluidité.
            </p>
            <a href="https://calendly.com/b-lelac-jlconsulting/30min">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
                Réserver une démo
              </button>
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="assets/office-du-tourisme-de-bordeaux-shadow.png"
              alt="Office de tourisme moderne"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Le défi des Offices de Tourisme modernes
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Les offices de tourisme doivent gérer de plus en plus de données :
              les visiteurs, les partenaires, les prestataires, les adhérents...
              Tout en assurant un suivi précis des réservations, des
              disponibilités de guides, et de multiples campagnes marketing. Or,
              trop souvent, ces informations sont dispersées dans différents
              outils, ce qui coûte du temps et limite les capacités d'analyse et
              de personnalisation.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">
            Les bénéfices clés
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                {benefit.icon}
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-blue-600 text-gray-700">
        <div className="container grid md:grid-cols-2 gap-20 mx-auto px-6">
          <div className="rounded-xl bg-white p-10 max-w-3xl mx-auto shadow-lg">
            <div className="flex flex-row">
              <Star
                fill="gold"
                strokeWidth={0}
                className="h-8 w-8 text-blue-600"
              />
              <Star
                fill="gold"
                strokeWidth={0}
                className="h-8 w-8 text-blue-600"
              />
              <Star
                fill="gold"
                strokeWidth={0}
                className="h-8 w-8 text-blue-600"
              />
              <Star
                fill="gold"
                strokeWidth={0}
                className="h-8 w-8 text-blue-600"
              />
              <Star
                fill="gold"
                strokeWidth={0}
                className="h-8 w-8 text-blue-600"
              />
            </div>
            <blockquote className="text-xl font-medium mb-8 pt-3">
              "Le suivi des adhésions et des campagnes marketing est enfin
              simplifié ! Avant, nos contacts étaient dispersés dans plusieurs
              outils et boîtes mail, mais aujourd’hui, tout est centralisé et
              partagé entre les services. Je peux facilement relancer les
              membres et optimiser les renouvellements sans risquer de perdre
              des informations précieuses."
            </blockquote>
            <hr className="my-6 w-full border-(--pattern-fg)" />
            <div className="text-lg font-bold">Virginie</div>
            <div className="opacity-90 text-sm">
              Responsable marketing & adhésions
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-white p-10 max-w-3xl mx-auto shadow-lg">
            <div className="flex flex-row">
              <Star
                fill="gold"
                strokeWidth={0}
                className="h-8 w-8 text-blue-600"
              />
              <Star
                fill="gold"
                strokeWidth={0}
                className="h-8 w-8 text-blue-600"
              />
              <Star
                fill="gold"
                strokeWidth={0}
                className="h-8 w-8 text-blue-600"
              />
              <Star
                fill="gold"
                strokeWidth={0}
                className="h-8 w-8 text-blue-600"
              />
              <Star
                fill="gold"
                strokeWidth={0}
                className="h-8 w-8 text-blue-600"
              />
            </div>
            <blockquote className="text-xl font-medium mb-8 pt-3">
              "Organiser les visites est devenu un jeu d’enfant ! Avant, on
              préparait tout manuellement dans nos boîtes mail, ce qui était
              source de confusion. Maintenant, tous les contacts sont récupérés
              et partagés avec l’équipe, ce qui améliore la coordination avec
              les guides et garantit une expérience fluide pour les visiteurs."
            </blockquote>
            <hr className="my-6 w-full border-(--pattern-fg)" />
            <div className="text-lg font-bold">Émilie</div>
            <div className="opacity-90 text-sm">Coordinatrice des visites</div>
          </div>
          <div className="rounded-xl bg-white p-10 max-w-3xl mx-auto shadow-lg">
            <div className="flex flex-row">
              <Star
                fill="gold"
                strokeWidth={0}
                className="h-8 w-8 text-blue-600"
              />
              <Star
                fill="gold"
                strokeWidth={0}
                className="h-8 w-8 text-blue-600"
              />
              <Star
                fill="gold"
                strokeWidth={0}
                className="h-8 w-8 text-blue-600"
              />
              <Star
                fill="gold"
                strokeWidth={0}
                className="h-8 w-8 text-blue-600"
              />
              <Star
                fill="gold"
                strokeWidth={0}
                className="h-8 w-8 text-blue-600"
              />
            </div>
            <blockquote className="text-xl font-medium mb-8 pt-3">
              "Envoyer des devis et des brochures est tellement plus rapide
              maintenant ! Tout est centralisé, ce qui me permet de mieux suivre
              chaque dossier et de savoir précisément où en est chaque demande.
              Avant, on manquait parfois d’informations et le suivi des devis
              était compliqué, mais aujourd’hui, on a une meilleure visibilité
              et une gestion plus efficace."
            </blockquote>
            <hr className="my-6 w-full border-(--pattern-fg)" />
            <div className="text-lg font-bold">Caroline</div>
            <div className="opacity-90 text-sm">
              Responsable des relations clients
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-white p-10 max-w-3xl mx-auto shadow-lg">
            <div className="flex flex-row">
              <Star
                fill="gold"
                strokeWidth={0}
                className="h-8 w-8 text-blue-600"
              />
              <Star
                fill="gold"
                strokeWidth={0}
                className="h-8 w-8 text-blue-600"
              />
              <Star
                fill="gold"
                strokeWidth={0}
                className="h-8 w-8 text-blue-600"
              />
              <Star
                fill="gold"
                strokeWidth={0}
                className="h-8 w-8 text-blue-600"
              />
              <Star
                fill="gold"
                strokeWidth={0}
                className="h-8 w-8 text-blue-600"
              />
            </div>
            <blockquote className="text-xl font-medium mb-8 pt-3 h-full">
              "Grâce à l’application, je peux voir toutes mes visites en un coup
              d'œil, gérer mon agenda et recevoir des notifications dès qu’une
              visite est acceptée. Fini les oublis et les mauvaises surprises,
              tout est centralisé et facile à suivre !"
            </blockquote>
            <hr className="my-6 w-full border-(--pattern-fg)" />
            <div className="text-lg font-bold">Thomas</div>
            <div className="opacity-90 text-sm">Guide touristique</div>
          </div>{" "}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Pourquoi choisir notre solution ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="assets/marketing-extra.png"
                alt="Office de tourisme moderne"
              />
            </div>{" "}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="assets/app-soft-shadow.png"
                alt="Office de tourisme moderne"
                className="w-full h-full object-cover"
              />
            </div>
            {differentiators.map((diff, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  {diff.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-gray-600">{diff.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Prêt à moderniser votre Office de Tourisme ?
          </h2>
          <a href="mailto:contact@jlconsulting.fr">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
              Contactez-nous dès aujourd'hui
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Rocket className="h-6 w-6" />
              <span className="text-lg font-semibold">OT-CRM</span>
            </div>
            <p>© 2024 OT-CRM. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const benefits = [
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Centralisation des contacts",
    description:
      "Regroupez et gérez facilement l’ensemble de vos contacts, qu’il s’agisse de clients, de partenaires ou de guides, pour un suivi optimisé et une meilleure collaboration.",
  },
  {
    icon: <ArrowLeftRight className="h-8 w-8 text-blue-600" />,
    title: "Amélioration de l'interaction avec les guides",
    description:
      "Une application dédiée pour une gestion simplifiée : offrez aux guides un outil pratique pour déclarer leurs disponibilités, gérer les visites récurrentes et suivre les approbations en temps réel, garantissant ainsi une organisation fluide.",
  },
  {
    icon: <Handshake className="h-8 w-8 text-blue-600" />,
    title: "Gestion fluide des relations clients",
    description:
      "Centralisez vos échanges avec vos clients grâce à des fonctionnalités dédiées aux devis, brochures et autres supports de communication, pour un service rapide et structuré.",
  },
  {
    icon: <Mails className="h-8 w-8 text-blue-600" />,
    title: "Gestion efficace des campagnes marketing",
    description:
      "Planifiez, suivez et analysez vos campagnes marketing pour toucher le bon public au bon moment et booster votre visibilité.",
  },
  {
    icon: <ClipboardPlus className="h-8 w-8 text-blue-600" />,
    title: "Optimisation des adhésions",
    description:
      "Relancez facilement les adhérents, suivez les paiements et optimisez la gestion de votre base de guides pour une meilleure rentabilité et un gain de temps considérable.",
  },
  {
    icon: <NotebookPen className="h-8 w-8 text-blue-600" />,
    title: "Organisation simplifiée des séminaires",
    description:
      "Gérez efficacement la logistique de vos séminaires en centralisant inscriptions, ressources et communications pour garantir un événement réussi.",
  },
];

const differentiators = [
  {
    icon: <Rocket className="h-6 w-6 text-blue-600" />,
    title: "Spécialisation tourisme",
    description:
      "Une solution conçue spécifiquement pour les besoins des offices de tourisme.",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
    title: "Application mobile intégrée",
    description:
      "Vos guides restent connectés et coordonnés en temps réel sur le terrain.",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
    title: "Automatisation marketing",
    description:
      "Des outils puissants pour créer et gérer vos campagnes marketing.",
  },
  {
    icon: <Heart className="h-6 w-6 text-blue-600" />,
    title: "Personnalisation avancée",
    description: "Suivez et adaptez-vous aux préférences de chaque visiteur.",
  },
];

export default App;
