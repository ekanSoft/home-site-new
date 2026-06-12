import { useState } from 'react'

const stack = [
  {
    name: 'React',
    detail: 'Typed components with StrictMode enabled.',
  },
  {
    name: 'Vite',
    detail: 'Fast local dev server and production builds.',
  },
  {
    name: 'Tailwind CSS',
    detail: 'Configured through the official Vite plugin.',
  },
] as const

function App() {
  const [count, setCount] = useState(1)

  return (
    <main className="min-h-screen bg-[#f7f8fb] px-6 py-10 text-slate-950 sm:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl flex-col justify-center gap-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold leading-tight tracking-normal sm:text-6xl">
            Ekan Soft starter
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            A clean React, Vite, TypeScript, and Tailwind CSS foundation ready
            for your next feature.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {stack.map((item) => (
            <article
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
              key={item.name}
            >
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.detail}
              </p>
            </article>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
          <button
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            onClick={() => setCount((value) => value + 1)}
            type="button"
          >
            Increment counter
          </button>

          <p className="text-sm text-slate-600">
            Counter value:{' '}
            <span className="font-semibold text-slate-950">{count}</span>
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
