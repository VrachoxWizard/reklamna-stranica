export function LocalBusinessJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Direkt IT Pomoć Zagreb",
    description: "Poštena i razumljiva IT pomoć za računala i laptope u Zagrebu. Fokus na Windows optimizaciju, spora računala, backup podataka, osnovnu malware provjeru i pomoć korisnicima početnicima.",
    url: "https://direkt-it-pomoc.hr",
    telephone: "+385900000000",
    email: "info@example.com",
    priceRange: "€",
    areaServed: {
      "@type": "City",
      name: "Zagreb"
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Windows optimizacija"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pomoć kod sporog računala"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Backup podataka"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
