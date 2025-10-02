import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="bg-blue-100">
      <UserButton  />
      <Button variant="destructive">Destructive </Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="secondary">Secondary</Button>
      <h1>stackoverflow clone </h1>
      <Button variant="outline">Button</Button>
      <Button variant="destructive">Destructive again</Button>
      <p>
        <Button variant="destructive">still don't get</Button> what change{" "}
      </p>
      <p className="font-sans ">The quick brown fox ...</p>
      <p className="font-serif ">The quick brown fox ...</p>
      <p className="font-mono ">The quick brown fox ...</p>

      <p className=" font-mono font-light ...">The quick brown fox ...</p>
      <p className="font-mono font-normal ...">The quick brown fox ...</p>
      <p className="font-mono font-medium ...">The quick brown fox ...</p>
      <p className="font-mono font-semibold ...">The quick brown fox ...</p>
      <p className="font-mono text-[30px] font-bold leading-[42px] tracking-tighter;">
        The quick brown fox testing...
      </p>
      <h1 className="text-4xl font-[var(--font-inter)]">This text is Inter</h1>

      <p className="text-lg font-[var(--font-spaceGrotesk)]">
        This text is Space Grotesk
      </p>
      <h1 className="text-4xl font-intel">This text is Inter</h1>

      <p className="text-lg font-spaceGrotesk font-bold leading-[42px] tracking-tighter">
        This text is Space Grotesk Whereas disregard and contempt for human
        rights have resulted
      </p>
      <p>This does not have any font </p>
    </div>
  );
}
