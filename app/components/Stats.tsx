// components/Stats.tsx
import { getSheetData } from '../lib/fetchGoogleSheet'

export default async function Stats({ pathname }: { pathname: string }) {
  const data = await getSheetData('Stats')

  

  // Apply style only if route is /projects
  const applyLiftStyle = pathname === "/projects";

  // data expected as array of objects: { Label: 'Projects Completed', Count: '500+' }
  return (
    <section className="bg-gradient-to-br from-sky-50 to-teal-50 pb-16">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {data.map((stat: any, i: number) => (
          <div key={i} className={`bg-white p-6 rounded-lg shadow text-center ${applyLiftStyle ? "-mt-16 relative z-[9]" : ""}`}>
            <div className="text-4xl font-bold text-blue-600">{stat.Count}</div>
            <div className="text-sm text-slate-600 mt-2">{stat.Label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
