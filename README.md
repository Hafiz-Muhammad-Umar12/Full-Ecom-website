This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
"# Full-Ecom-website" 



my_readme
settings.json configuration
update app/globals.css for custom classes
components/shared/header/menu.tsx   => for website layout
components/shared/header/search.tsx => for select input from shadcn
lib/data.ts  => for data
components/shared/header/index.tsx => for header
components/shared/footer.tsx => for footer
app/(home)/layout.tsx => for custom layout
app/(home)/page.tsx => for home page  shift page.tsx from app to (home)
app/layout.tsx => y
add images in public/images/banner1,2,3
data.ts 
npx shadcn@latest add carousel
npm i embla-carousel-autoplay
components/shared/home/home-carousel.tsx
page/(home)/page.tsx
create mongodb database on mongodb.com
get mongodb connection string and put it in .env.local as MONGODB_URL
npm i mongoose
lib/db/index.ts

password : JSPUm7NDNgt0ZsPD

lib/utils.ts
npm i zod
lib/validator.ts
types/index.ts
lib/db/models/product.model.ts
types/index.ts
lib/data.ts
add images from p-11-1 to p-46-2.jpg and categories images to public/images folder.
lib/db/seed.ts
package.json update
npm run seed
open mongodb compass and check results

copy .env.local content and past in vercel environment
commit changes and push to GitHub
go to https://full-ecom-website.vercel.app

cretae-home-cards
npx shadcn@latest add card
components/shared/home/home-card.tsx
lib/actions/product.actions.ts
app/(home)/page.tsx
create-todays-deals-slider
update global.css
update lib/actions/product.actions.ts
update lib/utils.ts
components/shared/product/rating.tsx
components/shared/product/product-price.tsx
components/shared/product/image-hover.tsx
components/shared/product/product-card.tsx
components/shared/product/product-slider.tsx
app/(home)/page.tsx
npm i react-medium-image-zoom
npx shadcn@latest add separator
lib/constants.ts
lib/actions/product.actions.ts
components/shared/product/product-gallary.tsx
components/shared/product/select-variant.tsx
app/(root)/product/[slug]/page.tsx
app/(root)/layout.tsx
create-browsing-history
npm i zustand
hooks/use-browsing-history.ts
components/shared/browsing-history-list.tsx
api address
app/api/products/browsing-history/route.ts
app/(home)/page.tsx
app/(root)/product/[slug]/page.tsx
components/shared/product/add-to-browsing-history.tsx
implement add-to-cart
npx shadcn@latest add toast
lib/utils.ts
lib/constants.ts
lib/validator.ts
types/index.ts
lib/actions/order.actions.ts
hooks/use-cart-store.ts
components/shared/product/add-to-cart.tsx
hooks/use-is-mounted.ts
app/(root)/product/[slug]/page.tsx
app/(root)/cart/[itemId]/cart-add-item.tsx
app/(root)/cart/[itemId]/page.tsx
components/shared/header/cart-button.tsx
components/shared/header/menu.tsx
components/shared/product/product-card.tsx
create-cart-page
hooks/use-cart-store.ts
app/(root)/cart/page.tsx
create-cart-sidebar
npx shadcn@latest add scroll-area

update lib/utils.ts
components/shared/cart-sidebar.tsx
create hooks/use-device-type.ts
create hooks/use-cart-sidebar.ts
UPDATED components/shared/header/cart-button.tsx
create components/shared/client-providers.tsx
update app/layout.tsx