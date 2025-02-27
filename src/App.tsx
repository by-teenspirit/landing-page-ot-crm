import React from "react";
import {
  BarChart3,
  Clock,
  Heart,
  LineChart,
  MessageSquare,
  Rocket,
  Users,
  Wallet,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">OT-CRM</span>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Contactez-nous
            </button>
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
              Centralisez vos contacts, personnalisez l'expérience visiteur et
              collaborez efficacement avec vos partenaires touristiques.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
              Réserver une démo
            </button>
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="dist\assets\office-du-tourisme-de-bordeaux-shadow.png"
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
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <img
              className="mx-auto h-12 mb-8"
              src="https://pro-bordeaux-tourisme.com/wp-content/uploads/2024/05/logo-bordeaux.png"
              alt=""
            />
            <blockquote className="text-2xl font-medium mb-8">
              "Grâce à ce nouveau CRM et à l'application mobile, nous avons pu
              réduire de 40 % le temps de traitement des réservations et
              augmenter la satisfaction visiteurs. Nos guides sont mieux
              coordonnés, et nos campagnes marketing ont gagné en efficacité."
            </blockquote>
            <cite className="text-lg opacity-90">
              – Office du Tourisme de Bordeaux –
            </cite>
          </div>
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
                src="dist\assets\marketing-extra.png"
                alt="Office de tourisme moderne"
              />
            </div>{" "}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="dist\assets\app-soft-shadow.png"
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
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Contactez-nous dès aujourd'hui
          </button>
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
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: "Gain de temps et d'efficacité",
    description:
      "Centralisez vos données, automatisez les tâches répétitives et réduisez le temps consacré aux opérations manuelles.",
  },
  {
    icon: <Heart className="h-8 w-8 text-blue-600" />,
    title: "Amélioration de l'expérience visiteur",
    description:
      "Offrez une expérience personnalisée avec un suivi fluide des demandes et une communication instantanée multilingue.",
  },
  {
    icon: <Wallet className="h-8 w-8 text-blue-600" />,
    title: "Optimisation économique",
    description:
      "Réduisez vos coûts de gestion et concentrez-vous sur des initiatives stratégiques à forte valeur ajoutée.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Collaboration renforcée",
    description:
      "Gérez efficacement vos partenariats, suivez les disponibilités et mettez en avant les acteurs locaux.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Analyses avancées",
    description:
      "Accédez à des statistiques détaillées sur la fréquentation, la satisfaction et le ROI de vos campagnes.",
  },
  {
    icon: <LineChart className="h-8 w-8 text-blue-600" />,
    title: "Marketing intelligent",
    description:
      "Créez des campagnes ciblées et automatisées pour fidéliser vos visiteurs et partenaires.",
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
