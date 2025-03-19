import { BlogPost } from "@/components/blog/blog-post";
import { RelatedPosts } from "@/components/blog/related-posts";

export default function FromCrawlingToConqueringPage() {
  const post = {
    title:
      "From Crawling to Conquering: Why Starting Beats Overthinking in Government Contracting",
    date: "March 06, 2025",
    author: "TATARIY",
    image: "/rahwa.jpg",
    content: [
      {
        type: "paragraph",
        text: "At TATARIY, we've seen it too often in government contracting: businesses—especially emerging ones like us—stall out, overanalyzing bids, fearing rejection, or waiting for the \"perfect\" solicitation. We're here to flip that. Picture a toddler strapped to a high chair, never allowed to crawl or stumble because their parents dread a fall. No skinned knees, no grabbing the couch to stand, no wobbly steps. Absurd, right? You'd say, \"How will they learn to walk?\" Yet here we are, doing the same to our dreams—binding them in fear and excuses, missing the chance to win contracts that could change everything. Let's talk about starting, even messy, in a world where action wins.",
      },
      {
        type: "paragraph",
        text: "Think of your dreams—say, landing that first GSA Schedule or breaking into an 8(a) program—as that toddler: restless, eager, ready to grow. They don't need endless capability statement drafts or shielding from a lost bid. They need you to start. Picture the thrill of watching them take clumsy steps—a SAM.gov registration, a teaming pitch, a proposal draft—stumbling, steadying, then soaring to a $50,000 subcontract or a $1 million prime award. Now imagine the cost of keeping them locked up: a business half-grown, a community robbed of your impact. That's what fear does. That's what analysis paralysis steals in government contracting.",
      },
      {
        type: "paragraph",
        text: 'Why do the vast majority of small businesses miss out on their share of the $758 billion in federal contracts annually—not because they lack capability, but because they hesitate to act. A 2021 Gallup study pegs fear of failure as the top blocker, with 67% of adults frozen by it. Add overthinking—endless FAR compliance checks or waiting for the "right" RFP—and you\'re stuck. Psychologist Barry Schwartz calls this the "paradox of choice," where too much planning drowns action. You wait for every duck to align, not realizing ducks line up after you pitch, after you bid.',
      },
      {
        type: "paragraph",
        text: "Contrast that with the 1-2% who snag those contracts. They're not fearless—they're braver. Take Sara Blakely, who turned $5,000 into Spanx with no blueprint, just hustle—imagine her pitching to a contracting officer instead of a retailer. Or Chadwick Boseman, grinding auditions while broke, like a minority-owned firm chasing HUBZone wins. These icons didn't dodge fear—they walked through it, knowing a \"no\" isn't fatal, just feedback.",
      },
      {
        type: "paragraph",
        text: "So, what's the difference? The 1% act. They break goals into bites—update your UEI, email a prime—because momentum trumps perfection. A 2018 Psychological Science study shows starting a task, even imperfectly, boosts dopamine, fueling progress. They embrace \"failing forward,\" like Edison's 1,000 lightbulb flops before brilliance—or a rejected bid that sharpens the next one. They network at events, seek mentors, and turn red tape into stepping stones. They trust the creator of the universe—and grit—has their back.",
      },
      {
        type: "paragraph",
        text: "Now, you. Where do you stand? In the 98%, clutching dreams too fragile to bid? Or the 1%, moving despite the mess? TATARIY's been there—emerging, scrappy, heart-driven, pushing past doubt. If you're stuck, ask: What's scarier—losing a bid or never trying? What's your business worth—regrets or risks? Study the giants: They didn't wait for certainty—they created it through action. Their secret? Time over doubt, purpose over noise.",
      },
      {
        type: "paragraph",
        text: "Here's your move: pick one contract dream you've shelved. Do one thing today—search FedBizOpps, call a teammate—not tomorrow, now. The universe doesn't cap your potential; you do. History proves it: penicillin was a moldy accident, Airbnb a broke-guy's gamble. Greatness starts sloppy. Every #GovCon titan crawled before they ran.",
      },
      {
        type: "paragraph",
        text: "Don't let fear or overthinking bury your shot at that Q4 award surge. Your business deserves to bid, win, and thrive—because when you stop hesitating, the government contracting world takes notice.",
      },
      {
        type: "paragraph",
        text: "Start today with TATARIY. The only thing you'll regret is waiting. Ready to bid bold? We're @TATARIYLLC on X—tell us your first step.",
      },
    ],
  };

  return (
    <>
      <BlogPost post={post} />
      <RelatedPosts />
    </>
  );
}
