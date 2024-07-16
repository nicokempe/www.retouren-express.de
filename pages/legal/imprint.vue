<template>
  <main class="flex-1">
    <section class="relative w-full bg-muted py-12 md:py-24 lg:py-32">
      <div class="container px-4 md:px-6 mx-auto">
        <div class="space-y-4 text-center">
          <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Impressum</div>
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Impressum von Retouren Express
          </h2>
          <p class="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
            Angaben gemäß § 5 TMG
          </p>
        </div>
        <div class="space-y-8">
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">Anbieterkennzeichnung</h3>
            <p class="text-muted-foreground">
              Elvis Ramadani & Lilly Kempe GbR <br>
              Am Park 8 <br>
              70771 Leinfelden-Echterdingen <br>
              Deutschland
            </p>
          </div>
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">Kontakt</h3>
            <p class="text-muted-foreground">
              Telefon: +49 152 31382287 <br>
              E-Mail: <a href="mailto:legal@retouren-express.de" class="text-primary hover:underline">legal@retouren-express.de</a>
            </p>
          </div>
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">Vertreten durch</h3>
            <p class="text-muted-foreground">
              Elvis Ramadani und Lilly Kempe
            </p>
          </div>
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">Haftungsausschluss</h3>
            <p class="text-muted-foreground">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>
          <div class="space-y-4">
            <h3 class="text-2xl font-bold">Urheberrecht</h3>
            <p class="text-muted-foreground">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Impressum',
  description: 'Impressum von Retouren Express mit Angaben gemäß § 5 TMG.',
  ogTitle: 'Impressum - Retouren Express',
  ogDescription: 'Impressum von Retouren Express mit Angaben gemäß § 5 TMG.',
  ogImage: '/unwrapping-min.webp',
  ogType: 'website',
  ogUrl: 'https://www.retouren-express.de/legal/imprint',
  twitterTitle: 'Impressum - Retouren Express',
  twitterDescription: 'Impressum von Retouren Express mit Angaben gemäß § 5 TMG.',
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
