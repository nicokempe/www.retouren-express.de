<template>
  <div class="flex min-h-screen flex-col">
    <header class="sticky top-0 z-50 w-full bg-background">
      <div class="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
        <NuxtLink to="#" class="flex items-center gap-2">
          <BoxIcon class="h-6 w-6" />
          <span class="text-lg font-bold">Retouren Express</span>
        </NuxtLink>
        <nav class="hidden items-center gap-4 md:flex">
          <NuxtLink to="#" class="text-sm font-medium hover:underline">About</NuxtLink>
          <NuxtLink to="#" class="text-sm font-medium hover:underline">How It Works</NuxtLink>
          <NuxtLink to="#" class="text-sm font-medium hover:underline">Services</NuxtLink>
          <NuxtLink to="#" class="text-sm font-medium hover:underline">FAQ</NuxtLink>
        </nav>
        <NuxtLink
            to="#"
            class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Get Started
        </NuxtLink>
      </div>
    </header>
    <main class="flex-1">
      <section class="relative w-full">
        <img src="https://placehold.co/1920x400" alt="Hero Background" class="absolute inset-0 h-full w-full object-cover" />
        <div class="container relative flex h-[400px] flex-col items-center justify-center gap-4 px-4 text-center text-primary-foreground md:px-6 mx-auto">
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Discover the Thrill of Mystery Boxes
          </h1>
          <p class="max-w-[600px] text-lg">Find top-tier tech and other surprises with Retouren Express</p>
          <div class="flex flex-col gap-2 sm:flex-row">
            <NuxtLink
                to="#"
                class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Get Started
            </NuxtLink>
            <NuxtLink
                to="#"
                class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Learn More
            </NuxtLink>
          </div>
        </div>
      </section>
      <section id="about" class="w-full py-12 md:py-24 lg:py-32">
        <div class="container grid items-center gap-6 px-4 md:grid-cols-2 md:px-6 lg:gap-12 mx-auto">
          <div class="space-y-4">
            <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Retouren Express</div>
            <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Discover the Thrill of Mystery Boxes
            </h2>
            <p class="text-muted-foreground md:text-xl lg:text-base xl:text-xl">
              Retouren Express is a leading provider of mystery boxes, offering a unique and exciting shopping
              experience. Our mission is to bring joy and surprise to our customers by curating a diverse selection of
              top-tier products at unbeatable prices.
            </p>
            <p class="text-muted-foreground md:text-xl lg:text-base xl:text-xl">
              With a focus on sustainability and customer satisfaction, we strive to create a shopping experience that
              is both thrilling and responsible. Join us on this adventure and discover the hidden gems that await
              you!
            </p>
          </div>
          <img
              src="https://placehold.co/600x400"
              alt="About Retouren Express"
              class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </section>
      <section id="how-it-works" class="w-full bg-muted py-12 md:py-24 lg:py-32">
        <div class="container grid items-center gap-6 px-4 md:grid-cols-2 md:px-6 lg:gap-12 mx-auto">
          <img
              src="https://placehold.co/600x400"
              alt="How It Works"
              class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
          <div class="space-y-4">
            <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">How It Works</div>
            <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Discover the Thrill of Mystery Boxes
            </h2>
            <div class="grid gap-6">
              <div class="grid grid-cols-[48px_1fr] items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <BoxIcon class="h-6 w-6" />
                </div>
                <div>
                  <h3 class="text-lg font-bold">Select a Box</h3>
                  <p class="text-muted-foreground">
                    Choose from our wide selection of mystery boxes, each curated with care.
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-[48px_1fr] items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <TruckIcon class="h-6 w-6" />
                </div>
                <div>
                  <h3 class="text-lg font-bold">Get it Delivered</h3>
                  <p class="text-muted-foreground">
                    Sit back and relax as your mystery box is delivered right to your doorstep.
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-[48px_1fr] items-center gap-4">
                <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <GiftIcon class="h-6 w-6" />
                </div>
                <div>
                  <h3 class="text-lg font-bold">Discover Your Surprise</h3>
                  <p class="text-muted-foreground">
                    Unbox your mystery box and discover the hidden treasures inside.
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
            <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
            <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Discover the Thrill of Mystery Boxes
            </h2>
            <p class="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
              Retouren Express offers a wide range of mystery boxes, each curated with care to provide you with the
              ultimate surprise experience. We also accept a & b returns and make them available in parcel machines
              for our customers to discover.
            </p>
          </div>
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div class="flex flex-col items-center gap-4">
              <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <ComputerIcon class="h-8 w-8" />
              </div>
              <h3 class="text-lg font-bold">Tech Boxes</h3>
              <p class="text-center text-muted-foreground">
                Discover the latest gadgets and electronics, including items like iPhones and AirPods.
              </p>
            </div>
            <div class="flex flex-col items-center gap-4">
              <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <MusicIcon class="h-8 w-8" />
              </div>
              <h3 class="text-lg font-bold">Fashion Boxes</h3>
              <p class="text-center text-muted-foreground">
                Uncover the latest trends in clothing and accessories.
              </p>
            </div>
            <div class="flex flex-col items-center gap-4">
              <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <HomeIcon class="h-8 w-8" />
              </div>
              <h3 class="text-lg font-bold">Home Boxes</h3>
              <p class="text-center text-muted-foreground">Find unique home decor and lifestyle items.</p>
            </div>
            <div class="flex flex-col items-center gap-4">
              <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <SmileIcon class="h-8 w-8" />
              </div>
              <h3 class="text-lg font-bold">Surprise Boxes</h3>
              <p class="text-center text-muted-foreground">Experience the thrill of the unknown.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" class="w-full bg-muted py-12 md:py-24 lg:py-32">
        <div class="container grid items-center gap-6 px-4 md:px-6 lg:gap-12 mx-auto">
          <div class="space-y-4 text-center">
            <div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">FAQ</div>
            <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p class="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
              Have questions about our mystery boxes or our parcel machine service? Check out our FAQ section for
              answers.
            </p>
          </div>
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>What is a mystery box?</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-muted-foreground">
                  A mystery box is a curated collection of products that are carefully selected and packaged for you
                  to discover. The contents of the box are a surprise, adding an element of excitement to your
                  shopping experience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How do I choose a mystery box?</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-muted-foreground">
                  Browse our selection of mystery boxes and choose the one that best fits your interests or budget.
                  You can select from a variety of themes, such as tech, fashion, or home decor.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What is the parcel machine service?</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-muted-foreground">
                  We accept a & b returns and make them available in our parcel machines for our customers to
                  discover. You can visit one of our parcel machine locations to browse and purchase these mystery
                  items.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What is the return policy?</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-muted-foreground">
                  We offer a 30-day return policy on all of our mystery boxes. If you are not satisfied with the
                  contents of your box, you can return it for a full refund.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
    <footer class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p class="text-xs text-muted-foreground">&copy; 2024 Retouren Express. All rights reserved.</p>
      <nav class="sm:ml-auto flex gap-4 sm:gap-6">
        <NuxtLink to="#" class="text-xs hover:underline underline-offset-4">Terms of Service</NuxtLink>
        <NuxtLink to="#" class="text-xs hover:underline underline-offset-4">Privacy</NuxtLink>
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
