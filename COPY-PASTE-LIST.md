# DigitalHippo - A Modern Fullstack E-Commerce Marketplace for Digital Products

Built with the Next.js 14 App Router, tRPC, TypeScript, Payload & Tailwind

![Project Image](https://github.com/joschan21/digitalhippo/blob/master/public/thumbnail.jpg)

## Copy & Paste List to follow along with the video (annoying stuff we don't wanna type out ourselves)

### Logo SVG
```
<svg viewBox="0 0 512 512">
    <g>
    <path
        d="M105.67 56.012c24.601 24.601 41.244 81.13 16.643 105.731s-81.13 7.958-105.731-16.643-20.623-60.509 3.978-85.11 60.509-28.579 85.11-3.978z"
        fill="#60a5fa"
        data-original="#abdfeb"
        opacity="1"
    ></path>
    <path
        d="M111.097 169.375c-9.754-53.933-61.535-93.098-102.131-94.531-13.495 22.793-12.381 50.26 7.615 70.256 21.368 21.367 66.817 36.724 94.516 24.275z"
        fill="#558ce7"
        data-original="#8bcdd8"
        opacity="1"
    ></path>
    <path
        d="M406.33 56.012c-24.601 24.601-41.244 81.13-16.643 105.731s81.13 7.958 105.731-16.643 20.623-60.509-3.978-85.11-60.509-28.579-85.11-3.978z"
        fill="#60a5fa"
        data-original="#abdfeb"
        opacity="1"
    ></path>
    <path
        d="M400.903 169.375c9.754-53.933 61.535-93.098 102.13-94.531 13.495 22.793 12.381 50.26-7.615 70.256-21.367 21.367-66.816 36.724-94.515 24.275z"
        fill="#558ce7"
        data-original="#8bcdd8"
        opacity="1"
    ></path>
    <ellipse
        cx="256"
        cy="244.04"
        rx="196.34"
        ry="186.42"
        fill="#60a5fa"
        data-original="#abdfeb"
        opacity="1"
    ></ellipse>
    <path
        d="M165.588 196.685a7.5 7.5 0 0 1-7.5-7.5v-15.008a7.5 7.5 0 0 1 15 0v15.008a7.5 7.5 0 0 1-7.5 7.5zM346.412 196.685a7.5 7.5 0 0 1-7.5-7.5v-15.008a7.5 7.5 0 0 1 15 0v15.008a7.5 7.5 0 0 1-7.5 7.5z"
        fill="#222222"
        data-original="#464d59"
        opacity="1"
    ></path>
    <path
        d="M212.03 62.322c-87.266 18.957-152.372 93.12-152.372 181.723 0 102.957 87.905 186.42 196.342 186.42 19.952 0 39.204-2.835 57.346-8.087C85.074 329.977 119.169 118.281 212.03 62.322z"
        fill="#558ce7"
        data-original="#8bcdd8"
        opacity="1"
    ></path>
    <path
        d="M409.201 247.067c-3.993-1.525-7.205-4.522-9.287-8.256-7.292-13.082-21.262-21.931-37.303-21.931a42.466 42.466 0 0 0-25.912 8.775c-2.706 2.072-6.138 2.964-9.522 2.563-22.448-2.662-46.36-3.941-71.178-3.941-24.818 0-48.73 1.279-71.178 3.941-3.384.401-6.816-.491-9.522-2.563a42.466 42.466 0 0 0-25.912-8.775c-16.04 0-30.01 8.85-37.303 21.931-2.081 3.734-5.293 6.731-9.287 8.256-49.69 18.976-81.141 50.52-81.141 97.301 0 85.459 104.919 128.202 234.342 128.202S490.34 429.827 490.34 344.368c.002-46.782-31.448-78.325-81.139-97.301z"
        fill="#87befb"
        data-original="#b9e8ef"
        opacity="1"
    ></path>
    <path
        d="M256 383.302a44.19 44.19 0 0 1-33.317-15.175 7.5 7.5 0 0 1 11.309-9.855 29.192 29.192 0 0 0 22.009 10.03 29.195 29.195 0 0 0 22.009-10.03 7.501 7.501 0 0 1 11.309 9.855A44.197 44.197 0 0 1 256 383.302z"
        fill="#222222"
        data-original="#464d59"
        opacity="1"
    ></path>
    <circle
        cx="149.39"
        cy="259.56"
        r="15.519"
        fill="#558ce7"
        data-original="#8bcdd8"
        opacity="1"
    ></circle>
    <circle
        cx="362.61"
        cy="259.56"
        r="15.519"
        fill="#558ce7"
        data-original="#8bcdd8"
        opacity="1"
    ></circle>
    <path
        d="M416.18 443.185c-246.851 43.269-311.115-113.303-300.169-158.197.615-2.522.695-5.142.379-7.719-2.455-20.031 5.053-45.274 18.266-57.764a42.819 42.819 0 0 0-22.705 19.548c-2.002 3.647-5.171 6.496-9.059 7.978-49.745 18.972-81.235 50.526-81.235 97.337 0 85.459 104.919 128.202 234.342 128.202 61.953 0 118.279-9.801 160.181-29.385z"
        fill="#60a5fa"
        data-original="#abdfeb"
        opacity="1"
    ></path>
    </g>
</svg>
```

### useOnClickOutside Hook
```
import { RefObject, useEffect } from "react";

type Event = MouseEvent | TouchEvent;

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event); // Call the handler only if the click is outside of the element passed.
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // Reload only if ref or handler changes
};
```

### Breadcrumbs Icon
```
<svg
    viewBox='0 0 20 20'
    fill='currentColor'
    aria-hidden='true'
    className='ml-2 h-5 w-5 flex-shrink-0 text-gray-300'>
    <path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
</svg>
```

### Stripe Webhook Boilerplate

```
const webhookRequest = req as any as WebhookRequest
const body = webhookRequest.rawBody
const signature = req.headers['stripe-signature'] || ''

let event
try {
event = stripe.webhooks.constructEvent(
    body,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET || ''
)
} catch (err) {
return res
    .status(400)
    .send(
    `Webhook Error: ${err instanceof Error ? err.message : 'Unknown Error'}`
    )
}

const session = event.data.object as Stripe.Checkout.Session

if (!session?.metadata?.userId || !session?.metadata?.orderId) {
return res.status(400).send(`Webhook Error: No user present in metadata`)
}

if (event.type === 'checkout.session.completed') {
const payload = await getPayloadClient()

const { docs: users } = await payload.find({
    collection: 'users',
    where: {
    id: {
        equals: session.metadata.userId,
    },
    },
})

const [user] = users

if (!user) return res.status(404).json({ error: 'No such user exists.' })

const { docs: orders } = await payload.find({
    collection: 'orders',
    depth: 2,
    where: {
    id: {
        equals: session.metadata.orderId,
    },
    },
})

const [order] = orders

if (!user) return res.status(404).json({ error: 'No such order exists.' })

await payload.update({
    collection: 'orders',
    data: {
    _isPaid: true,
    },
    where: {
    id: {
        equals: session.metadata.orderId,
    },
    },
})

// send receipt
try {
    const data = await resend.emails.send({
    from: 'DigitalHippo <hello@joshtriedcoding.com>',
    to: [user.email],
    subject: 'Thanks for your order! This is your receipt.',
    html: ReceiptEmailHtml({
        date: new Date(),
        email: user.email,
        orderId: session.metadata.orderId,
        products: order.products as Product[],
    }),
    })
    res.status(200).json({ data })
} catch (error) {
    res.status(500).json({ error })
}
}

return res.status(200).send()
```

### Receipt Email Body
```
<Html>
    <Head />
    <Preview>Your DigitalHippo Receipt</Preview>

    <Body style={main}>
    <Container style={container}>
        <Section>
        <Column>
            <Img
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}/hippo-email-sent.png`}
            width='100'
            height='100'
            alt='DigitalHippo'
            />
        </Column>

        <Column align='right' style={tableCell}>
            <Text style={heading}>Receipt</Text>
        </Column>
        </Section>
        <Section style={informationTable}>
        <Row style={informationTableRow}>
            <Column style={informationTableColumn}>
            <Text style={informationTableLabel}>EMAIL</Text>
            <Link
                style={{
                ...informationTableValue,
                }}>
                {email}
            </Link>
            </Column>

            <Column style={informationTableColumn}>
            <Text style={informationTableLabel}>INVOICE DATE</Text>
            <Text style={informationTableValue}>
                {format(date, 'dd MMM yyyy')}
            </Text>
            </Column>

            <Column style={informationTableColumn}>
            <Text style={informationTableLabel}>ORDER ID</Text>
            <Link
                style={{
                ...informationTableValue,
                }}>
                {orderId}
            </Link>
            </Column>
        </Row>
        </Section>
        <Section style={productTitleTable}>
        <Text style={productsTitle}>Order Summary</Text>
        </Section>
        {products.map((product) => {
        const { image } = product.images[0]

        return (
            <Section key={product.id}>
            <Column style={{ width: '64px' }}>
                {typeof image !== 'string' && image.url ? (
                <Img
                    src={image.url}
                    width='64'
                    height='64'
                    alt='Product Image'
                    style={productIcon}
                />
                ) : null}
            </Column>
            <Column style={{ paddingLeft: '22px' }}>
                <Text style={productTitle}>{product.name}</Text>
                {product.description ? (
                <Text style={productDescription}>
                    {product.description.length > 50
                    ? product.description?.slice(0, 50) + '...'
                    : product.description}
                </Text>
                ) : null}
                <Link
                href={`${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you?orderId=${orderId}`}
                style={productLink}>
                Download Asset
                </Link>
            </Column>

            <Column style={productPriceWrapper} align='right'>
                <Text style={productPrice}>{formatPrice(product.price)}</Text>
            </Column>
            </Section>
        )
        })}

        <Section>
        <Column style={{ width: '64px' }}></Column>
        <Column style={{ paddingLeft: '40px', paddingTop: 20 }}>
            <Text style={productTitle}>Transaction Fee</Text>
        </Column>

        <Column style={productPriceWrapper} align='right'>
            <Text style={productPrice}>{formatPrice(1)}</Text>
        </Column>
        </Section>

        <Hr style={productPriceLine} />
        <Section align='right'>
        <Column style={tableCell} align='right'>
            <Text style={productPriceTotal}>TOTAL</Text>
        </Column>
        <Column style={productPriceVerticalLine}></Column>
        <Column style={productPriceLargeWrapper}>
            <Text style={productPriceLarge}>{formatPrice(total)}</Text>
        </Column>
        </Section>
        <Hr style={productPriceLineBottom} />

        <Text style={footerLinksWrapper}>
        <Link href='#'>Account Settings</Link> •{' '}
        <Link href='#'>Terms of Sale</Link> •{' '}
        <Link href='#'>Privacy Policy </Link>
        </Text>
        <Text style={footerCopyright}>
        Copyright © 2023 DigitalHippo Inc. <br />{' '}
        <Link href='#'>All rights reserved</Link>
        </Text>
    </Container>
    </Body>
</Html>
```

### Receipt Email Styles
```
const main = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  backgroundColor: '#ffffff',
}

const resetText = {
  margin: '0',
  padding: '0',
  lineHeight: 1.4,
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '660px',
}

const tableCell = { display: 'table-cell' }

const heading = {
  fontSize: '28px',
  fontWeight: '300',
  color: '#888888',
}

const informationTable = {
  borderCollapse: 'collapse' as const,
  borderSpacing: '0px',
  color: 'rgb(51,51,51)',
  backgroundColor: 'rgb(250,250,250)',
  borderRadius: '3px',
  fontSize: '12px',
  marginTop: '12px',
}

const informationTableRow = {
  height: '46px',
}

const informationTableColumn = {
  paddingLeft: '20px',
  borderStyle: 'solid',
  borderColor: 'white',
  borderWidth: '0px 1px 1px 0px',
  height: '44px',
}

const informationTableLabel = {
  ...resetText,
  color: 'rgb(102,102,102)',
  fontSize: '10px',
}

const informationTableValue = {
  fontSize: '12px',
  margin: '0',
  padding: '0',
  lineHeight: 1.4,
}

const productTitleTable = {
  ...informationTable,
  margin: '30px 0 15px 0',
  height: '24px',
}

const productsTitle = {
  background: '#fafafa',
  paddingLeft: '10px',
  fontSize: '14px',
  fontWeight: '500',
  margin: '0',
}

const productIcon = {
  margin: '0 0 0 20px',
  borderRadius: '14px',
  border: '1px solid rgba(128,128,128,0.2)',
}

const productTitle = {
  fontSize: '12px',
  fontWeight: '600',
  ...resetText,
}

const productDescription = {
  fontSize: '12px',
  color: 'rgb(102,102,102)',
  ...resetText,
}

const productLink = {
  fontSize: '12px',
  color: 'rgb(0,112,201)',
  textDecoration: 'none',
}

const productPriceTotal = {
  margin: '0',
  color: 'rgb(102,102,102)',
  fontSize: '10px',
  fontWeight: '600',
  padding: '0px 30px 0px 0px',
  textAlign: 'right' as const,
}

const productPrice = {
  fontSize: '12px',
  fontWeight: '600',
  margin: '0',
}

const productPriceLarge = {
  margin: '0px 20px 0px 0px',
  fontSize: '16px',
  fontWeight: '600',
  whiteSpace: 'nowrap' as const,
  textAlign: 'right' as const,
}

const productPriceWrapper = {
  display: 'table-cell',
  padding: '0px 20px 0px 0px',
  width: '100px',
  verticalAlign: 'top',
}

const productPriceLine = { margin: '30px 0 0 0' }

const productPriceVerticalLine = {
  height: '48px',
  borderLeft: '1px solid',
  borderColor: 'rgb(238,238,238)',
}

const productPriceLargeWrapper = {
  display: 'table-cell',
  width: '90px',
}

const productPriceLineBottom = { margin: '0 0 75px 0' }

const footerLinksWrapper = {
  margin: '8px 0 0 0',
  textAlign: 'center' as const,
  fontSize: '12px',
  color: 'rgb(102,102,102)',
}

const footerCopyright = {
  margin: '25px 0 0 0',
  textAlign: 'center' as const,
  fontSize: '12px',
  color: 'rgb(102,102,102)',
}
```

### Package.json deployment commands
```
"build:payload": "cross-env PAYLOAD_CONFIG_PATH=src/payload.config.ts payload build",
"build:server": "tsc --project tsconfig.server.json",
"build:next": "cross-env PAYLOAD_CONFIG_PATH=dist/payload.config.js NEXT_BUILD=true node dist/server.js",
"build": "cross-env NODE_ENV=production yarn build:payload && yarn build:server && yarn copyfiles && yarn build:next",
"start": "cross-env PAYLOAD_CONFIG_PATH=dist/payload.config.js NODE_ENV=production node dist/server.js",
"copyfiles": "copyfiles -u 1 \"src/**/*.{html,css,scss,ttf,woff,woff2,eot,svg,jpg,png}\" dist/",
```

### Primary Action Email Body
```
<Html>
<Head />
<Preview>The marketplace for high-quality digital goods.</Preview>
<Body style={main}>
    <Container style={container}>
    <Img
        src={`${process.env.NEXT_PUBLIC_SERVER_URL}/hippo-newsletter-sign-up.png`}
        width="150"
        height="150"
        alt="DigitalHippo"
        style={logo}
    />
    <Text style={paragraph}>Hi there,</Text>
    <Text style={paragraph}>
        Welcome to DigitalHippo, the marketplace for high quality digital
        goods. Use the button below to {actionLabel}.
    </Text>
    <Section style={btnContainer}>
        <Button style={button} href={href}>
        {buttonText}
        </Button>
    </Section>
    <Text style={paragraph}>
        Best,
        <br />
        The DigitalHippo team
    </Text>
    <Hr style={hr} />
    <Text style={footer}>
        If you did not request this email, you can safely ignore it.
    </Text>
    </Container>
</Body>
</Html>
```

### Primary Action Email Styles
```
const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  padding: "12px 12px",
  backgroundColor: "#2563eb",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
```

### Customizing our metadata
```
export function constructMetadata({
  title = 'DigitalHippo - the marketplace for digital assets',
  description = 'DigitalHippo is an open-source marketplace for high-quality digital goods.',
  image = '/thumbnail.png',
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@joshtriedcoding',
    },
    icons,
    metadataBase: new URL('https://digitalhippo.up.railway.app'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}
```
