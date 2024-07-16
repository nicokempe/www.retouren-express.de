<template>
  <main class="flex-1">
    <section class="relative w-full bg-muted py-12 md:py-24 lg:py-32">
      <div class="container px-4 md:px-6 mx-auto">
        <div class="space-y-4 text-center">
          <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Datenschutzrichtlinie</div>
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Datenschutzrichtlinie von Retouren Express
          </h2>
        </div>
        <div class="space-y-8">
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">1. Einleitung</h3>
            <p class="text-muted-foreground">
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzrichtlinie.
            </p>
          </div>
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">2. Verantwortlicher</h3>
            <p class="text-muted-foreground">
              Verantwortlicher für die Datenverarbeitung auf dieser Website ist Retouren Express, Elvis Ramadani & Lilly Kempe GbR, Am Park 8, 70771 Leinfelden-Echterdingen, legal@retouren-express.de.
            </p>
          </div>
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">3. Erfassung und Verwendung personenbezogener Daten</h3>
            <p class="text-muted-foreground">
              Wir erfassen und verwenden personenbezogene Daten nur, soweit dies im Rahmen der Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.
            </p>
            <ul class="list-disc pl-6 text-muted-foreground">
              <li>Kontaktinformationen wie Name, E-Mail-Adresse und Telefonnummer</li>
              <li>Nutzungsdaten wie IP-Adresse, Browsertyp und Zugriffszeiten</li>
              <li>Transaktionsdaten bei Käufen und Retouren</li>
            </ul>
          </div>
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">4. Weitergabe von Daten</h3>
            <p class="text-muted-foreground">
              Wir geben Ihre personenbezogenen Daten nicht an Dritte weiter, außer wenn dies zur Erfüllung unserer vertraglichen Verpflichtungen erforderlich ist oder Sie ausdrücklich eingewilligt haben.
            </p>
          </div>
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">5. Ihre Rechte</h3>
            <p class="text-muted-foreground">
              Sie haben das Recht, Auskunft über die von uns gespeicherten personenbezogenen Daten zu erhalten sowie auf Berichtigung, Sperrung oder Löschung dieser Daten. Bei Fragen hierzu können Sie sich jederzeit an uns wenden.
            </p>
          </div>
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">6. Änderungen dieser Datenschutzrichtlinie</h3>
            <p class="text-muted-foreground">
              Wir behalten uns vor, diese Datenschutzrichtlinie bei Bedarf anzupassen, um sie stets den aktuellen rechtlichen Anforderungen anzupassen oder Änderungen unserer Leistungen in der Datenschutzrichtlinie umzusetzen. Die neue Datenschutzrichtlinie gilt ab Ihrem nächsten Besuch auf unserer Website.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Datenschutzrichtlinie',
  description: 'Erfahren Sie mehr über die Datenschutzrichtlinie von Retouren Express und wie wir Ihre persönlichen Daten schützen.',
  ogTitle: 'Datenschutzrichtlinie - Retouren Express',
  ogDescription: 'Erfahren Sie mehr über die Datenschutzrichtlinie von Retouren Express und wie wir Ihre persönlichen Daten schützen.',
  ogImage: '/unwrapping-min.webp',
  ogType: 'website',
  ogUrl: 'https://www.retouren-express.de/legal/privacy-policy',
  twitterTitle: 'Datenschutzrichtlinie - Retouren Express',
  twitterDescription: 'Erfahren Sie mehr über die Datenschutzrichtlinie von Retouren Express und wie wir Ihre persönlichen Daten schützen.',
  twitterImage: '/unwrapping-min.webp',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'de'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }
  ]
})
</script>
