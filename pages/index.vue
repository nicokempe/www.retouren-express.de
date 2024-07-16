<template>
  <div class="flex min-h-screen flex-col">
    <header class="sticky top-0 z-50 w-full bg-background">
      <div class="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
        <NuxtLink to="/" class="flex items-center gap-2">
          <BoxIcon class="h-6 w-6" />
          <span class="text-lg font-bold">Retouren Express</span>
        </NuxtLink>
        <nav class="hidden items-center gap-4 md:flex">
          <NuxtLink :to="{ path: '/', hash: '#about' }" class="text-sm font-medium hover:underline">Über uns</NuxtLink>
          <NuxtLink :to="{ path: '/', hash: '#how-it-works' }" class="text-sm font-medium hover:underline">Wie es funktioniert</NuxtLink>
          <NuxtLink :to="{ path: '/', hash: '#services' }" class="text-sm font-medium hover:underline">Dienstleistungen</NuxtLink>
          <NuxtLink :to="{ path: '/', hash: '#faq' }" class="text-sm font-medium hover:underline">FAQ</NuxtLink>
        </nav>
        <NuxtLink
            to="#"
            class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Jetzt starten
        </NuxtLink>
      </div>
    </header>
    <main class="flex-1">
      <section class="relative w-full">
        <img src="https://placehold.co/1920x400" alt="Hero Hintergrund" class="absolute inset-0 h-full w-full object-cover" />
        <div class="container relative flex h-[400px] flex-col items-center justify-center gap-4 px-4 text-center text-primary-foreground md:px-6 mx-auto">
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Entdecke den Nervenkitzel von Mystery Boxes
          </h1>
          <p class="max-w-[600px] text-lg">Finde hochwertige Technik und andere Überraschungen mit Retouren Express</p>
          <div class="flex flex-col gap-2 sm:flex-row">
            <NuxtLink
                to="#"
                class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Jetzt starten
            </NuxtLink>
            <NuxtLink
                to="#"
                class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Mehr erfahren
            </NuxtLink>
          </div>
        </div>
      </section>
      <section id="about" class="w-full py-12 md:py-24 lg:py-32">
        <div class="container grid items-center gap-6 px-4 md:grid-cols-2 md:px-6 lg:gap-12 mx-auto">
          <div class="space-y-4">
            <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Über Retouren Express</div>
            <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Entdecke den Nervenkitzel von Mystery Boxes
            </h2>
            <p class="text-muted-foreground md:text-xl lg:text-base xl:text-xl">
              Retouren Express ist ein führender Anbieter von Mystery Boxes und bietet ein einzigartiges und aufregendes Einkaufserlebnis. Unsere Mission ist es, unseren Kunden Freude und Überraschung zu bereiten, indem wir eine vielfältige Auswahl an hochwertigen Produkten zu unschlagbaren Preisen kuratieren.
            </p>
            <p class="text-muted-foreground md:text-xl lg:text-base xl:text-xl">
              Mit einem Fokus auf Nachhaltigkeit und Kundenzufriedenheit streben wir danach, ein Einkaufserlebnis zu schaffen, das sowohl aufregend als auch verantwortungsvoll ist. Begleite uns auf diesem Abenteuer und entdecke die versteckten Schätze, die auf dich warten!
            </p>
          </div>
          <img
              src="https://placehold.co/600x400"
              alt="Über Retouren Express"
              class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </section>
      <section id="how-it-works" class="w-full bg-muted py-12 md:py-24 lg:py-32">
        <div class="container grid items-center gap-6 px-4 md:grid-cols-2 md:px-6 lg:gap-12 mx-auto">
          <img
              src="https://placehold.co/600x400"
              alt="Wie es funktioniert"
              class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div class="space-y-4">
            <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Wie es funktioniert</div>
            <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Entdecke den Nervenkitzel von Mystery Boxes
            </h2>
            <div class="grid gap-6">
              <div class="grid grid-cols-[48px_1fr] items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <BoxIcon class="h-6 w-6" />
                </div>
                <div>
                  <h3 class="text-lg font-bold">Wähle eine Box</h3>
                  <p class="text-muted-foreground">
                    Wähle aus unserer großen Auswahl an Mystery Boxes, jede sorgfältig kuratiert.
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-[48px_1fr] items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <TruckIcon class="h-6 w-6" />
                </div>
                <div>
                  <h3 class="text-lg font-bold">Lass es dir liefern</h3>
                  <p class="text-muted-foreground">
                    Lehne dich zurück und entspanne dich, während deine Mystery Box direkt zu dir nach Hause geliefert wird.
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-[48px_1fr] items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <GiftIcon class="h-6 w-6" />
                </div>
                <div>
                  <h3 class="text-lg font-bold">Entdecke deine Überraschung</h3>
                  <p class="text-muted-foreground">
                    Packe deine Mystery Box aus und entdecke die versteckten Schätze darin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" class="w-full py-12 md:py-24 lg:py-32">
        <div class="container grid items-center gap-6 px-4 md:px-6 lg:gap-12 mx-auto">
          <div class="space-y-4 text-center">
            <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Unsere Dienstleistungen</div>
            <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Entdecke den Nervenkitzel von Mystery Boxes
            </h2>
            <p class="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
              Retouren Express bietet eine breite Palette von Mystery Boxes, jede sorgfältig kuratiert, um dir das ultimative Überraschungserlebnis zu bieten. Wir akzeptieren auch A- und B-Retouren und machen sie in Paketautomaten für unsere Kunden verfügbar.
            </p>
          </div>
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div class="flex flex-col items-center gap-4">
              <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <ComputerIcon class="h-8 w-8" />
              </div>
              <h3 class="text-lg font-bold">Tech-Boxen</h3>
              <p class="text-center text-muted-foreground">
                Entdecke die neuesten Gadgets und Elektronik, einschließlich Artikel wie iPhones und AirPods.
              </p>
            </div>
            <div class="flex flex-col items-center gap-4">
              <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <MusicIcon class="h-8 w-8" />
              </div>
              <h3 class="text-lg font-bold">Mode-Boxen</h3>
              <p class="text-center text-muted-foreground">
                Entdecke die neuesten Modetrends und Accessoires.
              </p>
            </div>
            <div class="flex flex-col items-center gap-4">
              <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <HomeIcon class="h-8 w-8" />
              </div>
              <h3 class="text-lg font-bold">Home-Boxen</h3>
              <p class="text-center text-muted-foreground">Finde einzigartige Wohn- und Lifestyle-Artikel.</p>
            </div>
            <div class="flex flex-col items-center gap-4">
              <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <SmileIcon class="h-8 w-8" />
              </div>
              <h3 class="text-lg font-bold">Überraschungs-Boxen</h3>
              <p class="text-center text-muted-foreground">Erlebe den Nervenkitzel des Unbekannten.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" class="w-full bg-muted py-12 md:py-24 lg:py-32">
        <div class="container grid items-center gap-6 px-4 md:px-6 lg:gap-12 mx-auto">
          <div class="space-y-4 text-center">
            <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">FAQ</div>
            <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Häufig gestellte Fragen</h2>
            <p class="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
              Hast du Fragen zu unseren Mystery Boxes oder unserem Paketautomaten-Service? Schau dir unseren FAQ-Bereich an, um Antworten zu finden.
            </p>
          </div>
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Was ist eine Mystery Box?
                </h3>
              </div>
              <div class="p-6">
                <p class="text-muted-foreground">
                  Eine Mystery Box ist eine kuratierte Sammlung von Produkten, die sorgfältig für dich ausgewählt und verpackt wurden. Der Inhalt der Box ist eine Überraschung, die deinem Einkaufserlebnis eine aufregende Note verleiht.
                </p>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Wie wähle ich eine Mystery Box?
                </h3>
              </div>
              <div class="p-6">
                <p class="text-muted-foreground">
                  Durchstöbere unsere Auswahl an Mystery Boxes und wähle diejenige, die am besten zu deinen Interessen oder deinem Budget passt. Du kannst aus verschiedenen Themenbereichen wie Technik, Mode oder Wohnaccessoires wählen.
                </p>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Was ist der Paketautomaten-Service?
                </h3>
              </div>
              <div class="p-6">
                <p class="text-muted-foreground">
                  Wir akzeptieren A- und B-Retouren und machen sie in unseren Paketautomaten für unsere Kunden verfügbar. Du kannst eine unserer Paketautomaten-Standorte besuchen, um diese Mystery-Artikel zu durchstöbern und zu kaufen.
                </p>
              </div>
            </div>
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Was ist die Rückgaberichtlinie?
                </h3>
              </div>
              <div class="p-6">
                <p class="text-muted-foreground">
                  Wir bieten eine 30-tägige Rückgabegarantie für alle unsere Mystery Boxes an. Wenn du mit dem Inhalt deiner Box nicht zufrieden bist, kannst du sie für eine vollständige Rückerstattung zurückgeben.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p class="text-xs text-muted-foreground">&copy; 2024 Elvis Ramadani & Lilly Kempe GbR. Alle Rechte vorbehalten.</p>
      <nav class="sm:ml-auto flex gap-4 sm:gap-6">
        <NuxtLink to="#" class="text-xs hover:underline underline-offset-4">Nutzungsbedingungen</NuxtLink>
        <NuxtLink to="#" class="text-xs hover:underline underline-offset-4">Datenschutz</NuxtLink>
        <NuxtLink to="#" class="text-xs hover:underline underline-offset-4">Facebook</NuxtLink>
        <NuxtLink to="#" class="text-xs hover:underline underline-offset-4">Twitter</NuxtLink>
        <NuxtLink to="#" class="text-xs hover:underline underline-offset-4">Instagram</NuxtLink>
      </nav>
    </footer>
  </div>
</template>

<script setup lang="ts">
import BoxIcon from '@/components/icons/BoxIcon.vue';
import ComputerIcon from '@/components/icons/ComputerIcon.vue';
import GiftIcon from '@/components/icons/GiftIcon.vue';
import HomeIcon from '@/components/icons/HomeIcon.vue';
import MusicIcon from '@/components/icons/MusicIcon.vue';
import SmileIcon from '@/components/icons/SmileIcon.vue';
import TruckIcon from '@/components/icons/TruckIcon.vue';

useSeoMeta({
  title: 'Start',
  description: 'Retouren Express - Ihr Partner für aufregende Rücksendungen und Mystery-Boxen.',
  ogTitle: 'Retouren Express',
  ogDescription: 'Retouren Express - Ihr Partner für aufregende Rücksendungen und Mystery-Boxen.',
  // TODO: ogImage: '/media/mockups/screen.webp',
  ogType: 'website',
  ogUrl: 'https://www.retouren-express.de/',
  twitterTitle: 'Retouren Express',
  twitterDescription: 'Retouren Express - Ihr Partner für aufregende Rücksendungen und Mystery-Boxen.',
  // TODO: twitterImage: '/media/mockups/screen.webp',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
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
