type Props = {
  title: string
  description: string
  audience?: string
}

export default function SeoIntro({ title, description, audience }: Props) {
  return (
    <section className="max-w-3xl mx-auto mb-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      <p className="mb-4 text-lg text-gray-700">
        {description}
      </p>

      {audience && (
        <p className="mb-4 text-gray-600">
          Ideal for {audience}.
        </p>
      )}
    </section>
  )
}
