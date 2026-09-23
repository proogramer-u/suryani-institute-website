import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { programs } from "@/data/programs";

function ProgramCard({ program, index }: { program: (typeof programs)[number]; index: number }) {
  return (
    <article className={`program-card program-card--${program.tone}`} style={{ zIndex: index + 1 }}>
      <div className="program-card__inner page-container">
        <div className="program-card__copy">
          <p className="program-card__number">{String(index + 1).padStart(2, "0")} / {String(programs.length).padStart(2, "0")}</p>
          <h2>{program.title}</h2>
          <p className="program-card__description">{program.description}</p>
          <div className="program-card__actions">
            <Link href="/contact/">Contact SIMH <ArrowUpRight aria-hidden="true" /></Link>
            <Link href="/articles/">Read our articles <ArrowUpRight aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="program-card__image">
          <Image src="/placeholder.svg" alt="" fill sizes="(max-width: 767px) 100vw, 45vw" aria-hidden="true" />
          <span>Placeholder image</span>
        </div>
      </div>
    </article>
  );
}

export function ProgramStack() {
  return (
    <div className="program-stack">
      {programs.map((program, index) => <ProgramCard key={program.title} program={program} index={index} />)}
    </div>
  );
}
