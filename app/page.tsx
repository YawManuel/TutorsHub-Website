import Image from 'next/image';
import Phone from '@/components/Phone';
import StoreButtons from '@/components/StoreButtons';
import { site } from '@/lib/site';

const features = [
  {
    id: 'classes',
    eyebrow: 'Live classes',
    title: 'Join a live class in one tap',
    body: 'See what’s on today, what’s coming up, and catch up on recorded lessons. Every class shows the time, level and price in cedis before you enrol.',
    points: ['Today, Upcoming & Recorded views', 'Small groups led by Hub Tutors', 'Clear GHS pricing — no surprises'],
    screens: [{ src: '/screens/class.png', alt: 'TutorsHub Class screen listing live mathematics and English classes' }],
    tint: 'blue',
  },
  {
    id: 'practice',
    eyebrow: 'Practice room',
    title: 'Thousands of questions, sorted for your grade',
    body: 'Pick a subject and grade, then drill past questions, trial questions, sample exams or aptitude tests. Instant feedback keeps score as you go.',
    points: ['5,000+ curriculum-aligned maths questions', 'Past questions, trials & sample exams', 'Score tracking on every set'],
    screens: [
      { src: '/screens/practice.png', alt: 'Practice screen with subject and grade selectors and question sets' },
      { src: '/screens/quiz.png', alt: 'Quiz screen showing a multiple choice pattern question' },
    ],
    tint: 'gold',
  },
  {
    id: 'tutors',
    eyebrow: 'Verified tutors',
    title: 'Book a tutor you can trust',
    body: 'Browse Hub Tutors by subject, compare ratings and session counts, and book a one-on-one. Stuck on homework right now? A Help Tutor is a chat away.',
    points: ['Ratings, badges & session history', 'Search by subject or name', 'On-demand Help Tutor chat'],
    screens: [{ src: '/screens/tutors.png', alt: 'Tutors screen listing rated tutors with prices per session' }],
    tint: 'green',
  },
  {
    id: 'rewards',
    eyebrow: 'Tut Coins & rewards',
    title: 'Learning that pays you back',
    body: 'Your home screen puts everything in reach: your Tut Coin wallet, upcoming sessions, challenges, study groups and short video lessons. Earn coins as you practise and compete.',
    points: ['Top up and withdraw in GHS', 'Challenges & study groups', 'Watch & learn video lessons'],
    screens: [{ src: '/screens/home.png', alt: 'Home screen with Tut Coin balance and quick actions' }],
    tint: 'pink',
  },
];

const roles = [
  {
    name: 'Student',
    body: 'Learn, practise and compete to earn coins. Live classes, homework help and exam prep in your pocket.',
    icon: '🎓',
  },
  {
    name: 'Hub Tutor',
    body: 'Teach scheduled tutoring sessions and tutorials. Set your price, build your rating, get paid in GHS.',
    icon: '📚',
  },
  {
    name: 'Help Tutor',
    body: 'Help students with assignments and essays on demand — pick up requests when it suits you.',
    icon: '💬',
  },
];

const steps = [
  { n: '1', title: 'Download the app', body: 'Free on Android. Install TutorsHub from Google Play in seconds.' },
  { n: '2', title: 'Choose how you’ll use it', body: 'Join as a Student, Hub Tutor or Help Tutor and create your account.' },
  { n: '3', title: 'Start learning', body: 'Book a tutor, join a live class or open the practice room — and start earning coins.' },
];

const faqs = [
  {
    q: 'Is TutorsHub free to download?',
    a: 'Yes. The app is free to download. You only pay for the classes and tutor sessions you book, priced in Ghana cedis.',
  },
  {
    q: 'Which grades and subjects are covered?',
    a: 'Practice sets currently focus on Mathematics across multiple grade levels, with live classes and tutors for English, Physics, Chemistry and more.',
  },
  {
    q: 'What are Tut Coins?',
    a: 'Tut Coins are your in-app wallet balance. Top up to pay for sessions, earn coins through practice and challenges, and withdraw when you need to.',
  },
  {
    q: 'How do I become a tutor?',
    a: 'Download the app and choose Hub Tutor (scheduled sessions) or Help Tutor (on-demand homework help) when you sign up.',
  },
  {
    q: 'Is it available on iPhone?',
    a: 'TutorsHub is launching on Android first. The iOS version is on the way — check back here for the App Store link.',
  },
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav__inner">
          <a href="#top" className="nav__logo" aria-label="TutorsHub home">
            <Image src="/brand/logo-full.png" alt="TutorsHub" width={1162} height={443} priority />
          </a>
          <nav className="nav__links" aria-label="Main">
            <a href="#features">Features</a>
            <a href="#roles">For tutors</a>
            <a href="#how">How it works</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href="#download" className="btn btn--gold btn--sm">
            Get the app
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero__deco" aria-hidden="true" />
          <div className="wrap hero__inner">
            <div className="hero__copy">
              <span className="pill">
                <span className="pill__dot" /> Made for students and tutors
              </span>
              <h1>
                Learn together.
                <br />
                <span className="hl">Practice smarter.</span>
              </h1>
              <p className="lead">
                Tutoring, live classes, practice rooms, challenges and rewards — all in one app. Get help the moment you
                need it, and earn as you learn.
              </p>
              <StoreButtons tone="dark" />
              <ul className="hero__ticks">
                <li>Free to download</li>
                <li>Pay in GHS</li>
                <li>Verified tutors</li>
              </ul>
            </div>
            <div className="hero__phones">
              <Phone src="/screens/welcome.png" alt="TutorsHub welcome screen" priority className="phone--front" />
              <Phone src="/screens/home.png" alt="TutorsHub home screen" className="phone--back" />
              <div className="float float--a" aria-hidden="true">
                <span className="float__icon">🏆</span>
                <span>
                  <b>+5 pts</b>
                  <small>Practice streak</small>
                </span>
              </div>
              <div className="float float--b" aria-hidden="true">
                <span className="live-dot" />
                <span>
                  <b>Live now</b>
                  <small>Applied Mathematics</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats" aria-label="TutorsHub at a glance">
          <div className="wrap">
            <div className="stats__grid">
            <div>
              <b>5,000+</b>
              <span>practice questions</span>
            </div>
            <div>
              <b>4</b>
              <span>ways to practise</span>
            </div>
            <div>
              <b>3</b>
              <span>ways to join</span>
            </div>
            <div>
              <b>GHS</b>
              <span>local pricing & payouts</span>
            </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="features">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Inside the app</span>
              <h2>Everything you need to ace the term</h2>
              <p>Real screens from the TutorsHub app.</p>
            </div>
            {features.map((f, i) => (
              <article key={f.id} id={f.id} className={`feature ${i % 2 ? 'feature--rev' : ''}`}>
                <div className={`feature__media tint--${f.tint} ${f.screens.length > 1 ? 'feature__media--pair' : ''}`}>
                  {f.screens.map((s) => (
                    <Phone key={s.src} src={s.src} alt={s.alt} />
                  ))}
                </div>
                <div className="feature__copy">
                  <span className="eyebrow">{f.eyebrow}</span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                  <ul className="checks">
                    {f.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ROLES */}
        <section id="roles" className="roles">
          <div className="wrap roles__inner">
            <div className="roles__copy">
              <span className="eyebrow eyebrow--gold">One app, three ways in</span>
              <h2>Learn with us — or teach with us</h2>
              <p className="lead">
                Pick your path when you sign up. Students get support on demand; tutors get a steady stream of learners
                and get paid in cedis.
              </p>
              <div className="role-cards">
                {roles.map((r) => (
                  <div key={r.name} className="role-card">
                    <span className="role-card__icon" aria-hidden="true">
                      {r.icon}
                    </span>
                    <div>
                      <h3>{r.name}</h3>
                      <p>{r.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="roles__phone">
              <Phone src="/screens/role.png" alt="Choose your role: Student, Hub Tutor or Help Tutor" />
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="how">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">How it works</span>
              <h2>Up and learning in three steps</h2>
            </div>
            <ol className="steps">
              {steps.map((s) => (
                <li key={s.n} className="step">
                  <span className="step__n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="faq">
          <div className="wrap faq__inner">
            <div className="section-head section-head--left">
              <span className="eyebrow">FAQ</span>
              <h2>Questions, answered</h2>
              <p>
                Still curious? Email us at <a href={`mailto:${site.email}`}>{site.email}</a>.
              </p>
            </div>
            <div className="faq__list">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* DOWNLOAD CTA */}
        <section id="download" className="cta">
          <div className="wrap cta__inner">
            <div className="cta__copy">
              <Image src="/brand/icon.png" alt="" width={72} height={72} className="cta__icon" />
              <h2>Your next A+ starts here.</h2>
              <p className="lead">Download TutorsHub free and get your first question answered today.</p>
              <StoreButtons tone="dark" />
            </div>
            <div className="cta__art" aria-hidden="true">
              <Image src="/brand/cta-student.png" alt="" width={290} height={342} />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer__inner">
          <Image src="/brand/logo-full.png" alt="TutorsHub" width={1162} height={443} className="footer__logo" />
          <nav aria-label="Footer">
            <a href="#features">Features</a>
            <a href="#roles">For tutors</a>
            <a href="#faq">FAQ</a>
            <a href={`mailto:${site.email}`}>Contact</a>
          </nav>
          <p>© {new Date().getFullYear()} TutorsHub Gh. Providing the best tutors for your home.</p>
        </div>
      </footer>
    </>
  );
}
