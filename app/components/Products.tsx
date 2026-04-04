import { Translations } from "../i18n";

interface ProductsProps {
  t: Translations;
}

const icons = [
  // Integration Suite
  <svg key="integration" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
  </svg>,
  // Agentic Workflow
  <svg key="workflow" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  // Onboarding
  <svg key="onboarding" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>,
];

const gradients = [
  "from-indigo-500 to-blue-600",
  "from-violet-500 to-purple-600",
  "from-emerald-500 to-teal-600",
];

const bgGradients = [
  "from-indigo-50 to-blue-50",
  "from-violet-50 to-purple-50",
  "from-emerald-50 to-teal-50",
];

export default function Products({ t }: ProductsProps) {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.products.sectionTitle}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">{t.products.sectionSub}</p>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.products.items.map((product, i) => (
            <div
              key={i}
              className={`relative rounded-2xl bg-gradient-to-br ${bgGradients[i]} border border-gray-100 p-8 hover:shadow-xl transition-all hover:-translate-y-1 group`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${gradients[i]} text-white mb-6 shadow-lg`}>
                {icons[i]}
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {product.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 bg-gradient-to-br ${gradients[i]} rounded-full p-0.5 text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover CTA */}
              <div className="mt-8">
                <a
                  href="#contact"
                  className={`text-sm font-semibold bg-gradient-to-r ${gradients[i]} bg-clip-text text-transparent group-hover:underline`}
                >
                  Les mer →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
