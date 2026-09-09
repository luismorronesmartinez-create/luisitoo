export type PageId =
  | 'home'
  | 'team'
  | 'launches'
  | 'rockets'
  | 'information'
  | 'sponsors'
  | 'news'
  | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  children?: { id: PageId; label: string; description: string }[];
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  {
    id: 'team',
    label: 'Team',
    children: [
      { id: 'team', label: 'Departments', description: 'Structures, Avionics, Propulsion & more' },
      { id: 'team', label: 'Members', description: 'Meet the crew behind the rockets' },
      { id: 'contact', label: 'Join the Team', description: 'Recruitment is open' },
    ],
  },
  {
    id: 'rockets',
    label: 'Rockets',
    children: [
      { id: 'rockets', label: 'Fleet', description: 'Mission-patch cards for every rocket' },
      { id: 'rockets', label: 'Build Gallery', description: 'Photos from the workshop' },
    ],
  },
  {
    id: 'launches',
    label: 'Launches',
    children: [
      { id: 'launches', label: 'Upcoming', description: 'Next launches & test fires' },
      { id: 'launches', label: 'Past Results', description: 'Competition recaps & records' },
    ],
  },
  {
    id: 'information',
    label: 'Information',
    children: [
      { id: 'information', label: 'About Us', description: 'Mission, history & values' },
      { id: 'information', label: 'Rocketry 101', description: 'How rockets work' },
      { id: 'information', label: 'Safety', description: 'Certifications & permits' },
    ],
  },
  { id: 'sponsors', label: 'Sponsors' },
  { id: 'news', label: 'News' },
  { id: 'contact', label: 'Contact' },
];

export const IMAGES = {
  heroRocket: 'https://images.pexels.com/photos/586054/pexels-photo-586054.jpeg?auto=compress&cs=tinysrgb&w=1920',
  heroLaunchPad: 'https://images.pexels.com/photos/586067/pexels-photo-586067.jpeg?auto=compress&cs=tinysrgb&w=1920',
  heroNightLaunch: 'https://images.pexels.com/photos/586041/pexels-photo-586041.jpeg?auto=compress&cs=tinysrgb&w=1920',
  heroTwilightPad: 'https://images.pexels.com/photos/586106/pexels-photo-586106.jpeg?auto=compress&cs=tinysrgb&w=1920',
  rocketLaunchSmoke: 'https://images.pexels.com/photos/7327336/pexels-photo-7327336.jpeg?auto=compress&cs=tinysrgb&w=1920',
  rocketBoosters: 'https://images.pexels.com/photos/18015296/pexels-photo-18015296.jpeg?auto=compress&cs=tinysrgb&w=1920',
  rocketOverOcean: 'https://images.pexels.com/photos/586066/pexels-photo-586066.jpeg?auto=compress&cs=tinysrgb&w=1920',
  rocketTrailSky: 'https://images.pexels.com/photos/586061/pexels-photo-586061.png?auto=compress&cs=tinysrgb&w=1920',
  rocketCloudyLaunch: 'https://images.pexels.com/photos/586113/pexels-photo-586113.jpeg?auto=compress&cs=tinysrgb&w=1920',
  rocketLaunchReflect: 'https://images.pexels.com/photos/2163/sea-flight-sky-earth.jpg?auto=compress&cs=tinysrgb&w=1920',
  rocketLaunchDay: 'https://images.pexels.com/photos/586071/pexels-photo-586071.jpeg?auto=compress&cs=tinysrgb&w=1920',
  rocketLaunchTrail: 'https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?auto=compress&cs=tinysrgb&w=1920',
  engineTestFire: 'https://images.pexels.com/photos/586032/pexels-photo-586032.jpeg?auto=compress&cs=tinysrgb&w=1920',
  engineCloseup: 'https://images.pexels.com/photos/8968869/pexels-photo-8968869.jpeg?auto=compress&cs=tinysrgb&w=1920',
  engineNozzle: 'https://images.pexels.com/photos/13228797/pexels-photo-13228797.jpeg?auto=compress&cs=tinysrgb&w=1920',
  engineSaturnV: 'https://images.pexels.com/photos/6969575/pexels-photo-6969575.jpeg?auto=compress&cs=tinysrgb&w=1920',
  rocketBody: 'https://images.pexels.com/photos/586090/pexels-photo-586090.jpeg?auto=compress&cs=tinysrgb&w=1920',
  workshopHangar: 'https://images.pexels.com/photos/256297/pexels-photo-256297.jpeg?auto=compress&cs=tinysrgb&w=1920',
  workshopAircraft: 'https://images.pexels.com/photos/5550510/pexels-photo-5550510.jpeg?auto=compress&cs=tinysrgb&w=1920',
  workshopMechanic: 'https://images.pexels.com/photos/586098/pexels-photo-586098.jpeg?auto=compress&cs=tinysrgb&w=1920',
  workshopIndustrial: 'https://images.pexels.com/photos/236709/pexels-photo-236709.jpeg?auto=compress&cs=tinysrgb&w=1920',
  teamWorking1: 'https://images.pexels.com/photos/9242842/pexels-photo-9242842.jpeg?auto=compress&cs=tinysrgb&w=1920',
  teamWorking2: 'https://images.pexels.com/photos/7869041/pexels-photo-7869041.jpeg?auto=compress&cs=tinysrgb&w=1920',
  teamWorking3: 'https://images.pexels.com/photos/9242834/pexels-photo-9242834.jpeg?auto=compress&cs=tinysrgb&w=1920',
  teamWorking4: 'https://images.pexels.com/photos/9242823/pexels-photo-9242823.jpeg?auto=compress&cs=tinysrgb&w=1920',
  teamWorking5: 'https://images.pexels.com/photos/9242817/pexels-photo-9242817.jpeg?auto=compress&cs=tinysrgb&w=1920',
  teamWorking6: 'https://images.pexels.com/photos/9242855/pexels-photo-9242855.jpeg?auto=compress&cs=tinysrgb&w=1920',
  circuitBoard: 'https://images.pexels.com/photos/3520692/pexels-photo-3520692.jpeg?auto=compress&cs=tinysrgb&w=1920',
  circuitBoard2: 'https://images.pexels.com/photos/163170/board-printed-circuit-board-computer-electronics-163170.jpeg?auto=compress&cs=tinysrgb&w=1920',
  spacenight: 'https://images.pexels.com/photos/15061966/pexels-photo-15061966.jpeg?auto=compress&cs=tinysrgb&w=1920',
};

export interface Rocket {
  id: string;
  name: string;
  designation: string;
  status: 'in-development' | 'ready' | 'launched' | 'retired';
  tagline: string;
  description: string;
  image: string;
  specs: {
    altitude: string;
    motor: string;
    diameter: string;
    length: string;
    weight: string;
    material: string;
    payload: string;
    recovery: string;
  };
  achievements: string[];
  year: number;
}

export const rockets: Rocket[] = [
  {
    id: 'mako',
    name: 'Mako',
    designation: 'HH-01',
    status: 'launched',
    tagline: 'First flight, first flame',
    description:
      'Our inaugural rocket. Built entirely from scratch in the university workshop, Mako proved that a student team could design, manufacture, and fly a high-power rocket to a stable apogee. A single-stage vehicle with a fiberglass airframe and student-designed recovery system.',
    image: IMAGES.heroTwilightPad,
    specs: {
      altitude: '3,200 m',
      motor: 'Aerotech K700 (K-class)',
      diameter: '76 mm',
      length: '2.1 m',
      weight: '4.8 kg',
      material: 'Fiberglass / Carbon tip',
      payload: 'Altimeter + GPS logger',
      recovery: 'Dual-deploy parachute',
    },
    achievements: ['First successful student launch at BCN test range', 'Apogee within 8% of predicted'],
    year: 2024,
  },
  {
    id: 'bullhead',
    name: 'Bullhead',
    designation: 'HH-02',
    status: 'launched',
    tagline: 'Pushed the ceiling higher',
    description:
      'Our second-generation vehicle. Bullhead introduced a carbon-fiber composite airframe, a student-cast custom motor, and an active drag-recovery system. Designed for the national collegiate competition, it flew to over 4 km and placed second overall.',
    image: IMAGES.heroRocket,
    specs: {
      altitude: '4,100 m',
      motor: 'Custom L-class (student-cast)',
      diameter: '98 mm',
      length: '2.6 m',
      weight: '6.2 kg',
      material: 'Carbon fiber composite',
      payload: 'Flight computer + telemetry',
      recovery: 'Active drag + main chute',
    },
    achievements: ['2nd place — National Collegiate Rocketry Cup', 'Custom motor static-tested 3× before flight'],
    year: 2025,
  },
  {
    id: 'great-hammerhead',
    name: 'Great Hammerhead',
    designation: 'HH-03',
    status: 'in-development',
    tagline: 'Built for the Spaceport America Cup',
    description:
      'Our most ambitious vehicle yet. Great Hammerhead is being designed for the 2026 Spaceport America Cup, targeting a 10 km apogee with a two-stage configuration, a student-designed flight computer with real-time telemetry, and a custom 3D-printed aerodynamic nose cone optimized for transonic flight.',
    image: IMAGES.heroNightLaunch,
    specs: {
      altitude: '10,000 m (target)',
      motor: 'Custom M-class (booster) + K-class (sustainer)',
      diameter: '120 mm',
      length: '3.4 m',
      weight: '12.5 kg (est.)',
      material: 'Carbon fiber / SLS nylon nose',
      payload: 'Flight computer + live telemetry + experiment bay',
      recovery: 'Two-stage dual-deploy',
    },
    achievements: ['In development — critical design review complete', 'Static test fire scheduled Q1 2026'],
    year: 2026,
  },
  {
    id: 'bonnethead',
    name: 'Bonnethead',
    designation: 'HH-S1',
    status: 'ready',
    tagline: 'Static test platform',
    description:
      'A purpose-built static test stand vehicle. Bonnethead is not meant to fly — it is our motor development platform. We use it to validate new propellant formulations, nozzle geometries, and chamber pressure data before committing to a flight motor.',
    image: IMAGES.engineTestFire,
    specs: {
      altitude: 'Ground-level (static)',
      motor: 'Various test motors (J–M class)',
      diameter: '98 mm',
      length: '1.2 m',
      weight: '8.0 kg (with stand)',
      material: 'Steel / Aluminum',
      payload: 'Thrust load cell + pressure sensors',
      recovery: 'N/A',
    },
    achievements: ['12 successful static test fires', 'Validated 3 custom propellant formulations'],
    year: 2025,
  },
];

export interface TeamDepartment {
  id: string;
  name: string;
  lead: string;
  count: number;
  description: string;
  icon: string;
  image: string;
}

export const departments: TeamDepartment[] = [
  {
    id: 'structures',
    name: 'Structures',
    lead: 'Marc Vidal',
    count: 8,
    description: 'Designs and manufactures the airframe, fins, and structural components. Works with composites, aluminum, and 3D-printed parts.',
    icon: 'Box',
    image: IMAGES.workshopHangar,
  },
  {
    id: 'avionics',
    name: 'Avionics',
    lead: 'Laia Ferrer',
    count: 6,
    description: 'Builds the flight computers, telemetry systems, and sensor payloads. Designs custom PCBs and writes embedded firmware.',
    icon: 'Cpu',
    image: IMAGES.circuitBoard,
  },
  {
    id: 'propulsion',
    name: 'Propulsion',
    lead: 'Joan Riera',
    count: 7,
    description: 'Develops solid and hybrid rocket motors. Handles propellant formulation, nozzle design, and static test fires.',
    icon: 'Flame',
    image: IMAGES.engineTestFire,
  },
  {
    id: 'recovery',
    name: 'Recovery',
    lead: 'Núria Bosch',
    count: 4,
    description: 'Designs parachute systems, deployment mechanisms, and descent profiles to ensure every rocket comes home safely.',
    icon: 'Parachute',
    image: IMAGES.rocketOverOcean,
  },
  {
    id: 'aerodynamics',
    name: 'Aerodynamics',
    lead: 'Pau Soler',
    count: 5,
    description: 'Performs CFD simulations, wind-tunnel testing, and fin optimization to maximize stability and altitude.',
    icon: 'Wind',
    image: IMAGES.rocketTrailSky,
  },
  {
    id: 'business',
    name: 'Business & Sponsorship',
    lead: 'Clara Mata',
    count: 5,
    description: 'Manages sponsorships, partnerships, budgets, media relations, and competition logistics.',
    icon: 'Briefcase',
    image: IMAGES.teamWorking2,
  },
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'mvidal',
    name: 'Marc Vidal',
    role: 'Team Lead & Structures Lead',
    department: 'Structures',
    bio: 'Aerospace engineering student. Led the Mako airframe design and oversees all structural decisions across the fleet.',
    image: 'https://images.pexels.com/photos/30496625/pexels-photo-30496625.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'lferrer',
    name: 'Laia Ferrer',
    role: 'Avionics Lead',
    department: 'Avionics',
    bio: 'Electrical engineering student. Designed the Bullhead flight computer and built the live telemetry downlink system.',
    image: 'https://images.pexels.com/photos/9241724/pexels-photo-9241724.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'jriera',
    name: 'Joan Riera',
    role: 'Propulsion Lead',
    department: 'Propulsion',
    bio: 'Mechanical engineering student. Casts custom motors and runs the static test program. Has logged 12 successful test fires.',
    image: 'https://images.pexels.com/photos/34592823/pexels-photo-34592823.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'nbosch',
    name: 'Núria Bosch',
    role: 'Recovery Lead',
    department: 'Recovery',
    bio: 'Physics student. Designs dual-deploy parachute systems and models descent profiles for every mission.',
    image: 'https://images.pexels.com/photos/4031690/pexels-photo-4031690.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'psoler',
    name: 'Pau Soler',
    role: 'Aerodynamics Lead',
    department: 'Aerodynamics',
    bio: 'Aerospace engineering student. Runs CFD simulations and optimized the Great Hammerhead fin geometry for transonic flight.',
    image: 'https://images.pexels.com/photos/33261955/pexels-photo-33261955.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'cmata',
    name: 'Clara Mata',
    role: 'Business & Sponsorship Lead',
    department: 'Business',
    bio: 'Business administration student. Secured partnerships with three aerospace companies and manages the competition budget.',
    image: 'https://images.pexels.com/photos/31869537/pexels-photo-31869537.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'agarcia',
    name: 'Anna Garcia',
    role: 'Avionics Engineer',
    department: 'Avionics',
    bio: 'Computer engineering student. Writes the embedded firmware for the flight computer and built the ground station software.',
    image: 'https://images.pexels.com/photos/8515116/pexels-photo-8515116.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'tortega',
    name: 'Tomás Ortega',
    role: 'Structures Engineer',
    department: 'Structures',
    bio: 'Mechanical engineering student. Specializes in composite layup manufacturing and vacuum-bagging techniques.',
    image: 'https://images.pexels.com/photos/32844866/pexels-photo-32844866.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export interface LaunchEvent {
  id: string;
  name: string;
  date: string;
  dateLabel: string;
  location: string;
  rocket: string;
  status: 'upcoming' | 'ready' | 'launched' | 'scrubbed';
  type: 'launch' | 'test-fire' | 'competition';
  result?: string;
  description: string;
}

export const launchEvents: LaunchEvent[] = [
  {
    id: 'sac-2026',
    name: 'Spaceport America Cup 2026',
    date: '2026-06-24',
    dateLabel: 'Jun 24, 2026',
    location: 'Spaceport America, New Mexico, USA',
    rocket: 'Great Hammerhead (HH-03)',
    status: 'upcoming',
    type: 'competition',
    description: 'The world\'s largest collegiate rocketry competition. We will compete in the 10,000 ft solid motor category with our two-stage Great Hammerhead vehicle.',
  },
  {
    id: 'static-gh-1',
    name: 'Great Hammerhead — Booster Static Test',
    date: '2026-03-15',
    dateLabel: 'Mar 15, 2026',
    location: 'BCN Test Range, Catalonia',
    rocket: 'Bonnethead (HH-S1)',
    status: 'upcoming',
    type: 'test-fire',
    description: 'First static test fire of the M-class booster motor for Great Hammerhead. Validating chamber pressure, thrust profile, and nozzle ablation.',
  },
  {
    id: 'euroc-2026',
    name: 'EuRoC 2026',
    date: '2026-05-12',
    dateLabel: 'May 12, 2026',
    location: 'Santa Margarida i els Monjos, Catalonia',
    rocket: 'Bullhead (HH-02)',
    status: 'upcoming',
    type: 'competition',
    description: 'European Rocketry Challenge. We will fly Bullhead in the 30,000 ft category and present our flight computer design to the technical jury.',
  },
  {
    id: 'bullhead-flight-2',
    name: 'Bullhead — Qualification Flight',
    date: '2026-02-08',
    dateLabel: 'Feb 8, 2026',
    location: 'BCN Test Range, Catalonia',
    rocket: 'Bullhead (HH-02)',
    status: 'ready',
    type: 'launch',
    description: 'Qualification flight for EuRoC 2026. Targeting 4 km apogee with updated avionics and a new drogue chute design.',
  },
  {
    id: 'national-2025',
    name: 'National Collegiate Rocketry Cup 2025',
    date: '2025-09-14',
    dateLabel: 'Sep 14, 2025',
    location: 'INTA El Arenosillo, Huelva, Spain',
    rocket: 'Bullhead (HH-02)',
    status: 'launched',
    type: 'competition',
    result: '2nd Place — 4,100 m apogee',
    description: 'Our first competition entry. Bullhead flew to 4,100 m and placed second nationally. The flight computer logged full telemetry from liftoff to landing.',
  },
  {
    id: 'mako-flight',
    name: 'Mako — Maiden Flight',
    date: '2025-05-03',
    dateLabel: 'May 3, 2025',
    location: 'BCN Test Range, Catalonia',
    rocket: 'Mako (HH-01)',
    status: 'launched',
    type: 'launch',
    result: 'Success — 3,200 m apogee',
    description: 'Our first ever rocket flight. Mako launched, reached 3,200 m, and was recovered intact with both parachutes deployed successfully. A milestone for the team.',
  },
  {
    id: 'static-bonnet-12',
    name: 'Bonnethead — Test Fire #12',
    date: '2025-11-20',
    dateLabel: 'Nov 20, 2025',
    location: 'BCN Test Range, Catalonia',
    rocket: 'Bonnethead (HH-S1)',
    status: 'launched',
    type: 'test-fire',
    result: 'Success — 2.4 kN peak thrust',
    description: 'Twelfth static test fire. Validated a new AP/HTPB propellant formulation with improved burn rate consistency.',
  },
];

export interface NewsArticle {
  id: string;
  title: string;
  category: 'Build Updates' | 'Competitions' | 'Events' | 'Technical';
  date: string;
  dateLabel: string;
  author: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: string[];
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'great-hammerhead-cdr',
    title: 'Great Hammerhead Passes Critical Design Review',
    category: 'Build Updates',
    date: '2026-01-15',
    dateLabel: 'Jan 15, 2026',
    author: 'Marc Vidal',
    readTime: '4 min read',
    excerpt: 'Our Spaceport America Cup vehicle has passed its critical design review. The team is now moving into manufacturing with the booster stage scheduled for static testing in March.',
    image: IMAGES.heroNightLaunch,
    content: [
      'After six months of design iterations, the Great Hammerhead (HH-03) has passed its critical design review (CDR). The review was conducted by a panel of university faculty and external aerospace industry mentors.',
      'The two-stage vehicle targets a 10 km apogee at the 2026 Spaceport America Cup. Key design decisions validated at CDR include the carbon-fiber composite airframe, the SLS nylon nose cone optimized for transonic flight, and the student-designed M-class booster motor.',
      'Manufacturing begins immediately. The structures team has already started the layup process for the booster airframe, and the propulsion team is preparing the static test stand for the first booster motor test fire in March.',
      'The avionics team has finalized the flight computer PCB design and sent it for fabrication. The new board features a dual-redundant IMU, a GPS module, and an LoRa telemetry downlink capable of transmitting real-time flight data to the ground station at 10 km range.',
    ],
  },
  {
    id: 'national-cup-2025-recap',
    title: '2nd Place at the National Collegiate Rocketry Cup',
    category: 'Competitions',
    date: '2025-09-20',
    dateLabel: 'Sep 20, 2025',
    author: 'Clara Mata',
    readTime: '5 min read',
    excerpt: 'We placed second at the national competition with a 4,100 m apogee flight. Here is the full recap of the competition, the flight, and what we learned.',
    image: IMAGES.heroRocket,
    content: [
      'On September 14, 2025, Bullhead lifted off from INTA El Arenosillo in Huelva and climbed to 4,100 m — within 5% of our predicted apogee. The flight computer logged the entire trajectory, and both parachutes deployed nominally.',
      'The competition jury evaluated us on flight performance, technical design, and a 20-minute presentation of our engineering process. We placed second overall, missing first by just 3 points.',
      'Key lessons: our recovery system performed flawlessly, but our pre-launch preparation took longer than planned due to a last-minute avionics connector issue. For EuRoC 2026, we are implementing a pre-flight checklist system and redundant connector harnesses.',
      'We are proud of the result and grateful to our sponsors and university mentors who made this possible. The trophy is now displayed in our workshop — right next to the Mako airframe.',
    ],
  },
  {
    id: 'static-test-12',
    title: 'Test Fire #12: New Propellant Formulation Validated',
    category: 'Technical',
    date: '2025-11-22',
    dateLabel: 'Nov 22, 2025',
    author: 'Joan Riera',
    readTime: '3 min read',
    excerpt: 'Our twelfth static test fire validated a new AP/HTPB propellant formulation with improved burn rate consistency. Peak thrust: 2.4 kN.',
    image: IMAGES.engineTestFire,
    content: [
      'On November 20, we conducted our twelfth static test fire on the Bonnethead test platform. The test validated a new ammonium perchlorate / HTPB propellant formulation designed for improved burn rate consistency.',
      'Peak thrust was 2.4 kN with a total impulse of 1,820 N·s, matching our simulation within 3%. The thrust curve was notably smoother than our previous formulation, with a reduced tail-off variance.',
      'The test was instrumented with a thrust load cell, chamber pressure transducer, and high-speed video. All data has been logged and will inform the Great Hammerhead booster motor design.',
      'Safety protocol was followed throughout: 200 m minimum distance, fire suppression system armed, and all personnel behind the blast shield during ignition.',
    ],
  },
  {
    id: 'workshop-tour',
    title: 'Inside the Workshop: A Tour of Our Build Space',
    category: 'Build Updates',
    date: '2025-10-05',
    dateLabel: 'Oct 5, 2025',
    author: 'Laia Ferrer',
    readTime: '4 min read',
    excerpt: 'Take a photo tour through our workshop — from the composites layup area to the avionics bench and the static test stand.',
    image: IMAGES.workshopHangar,
    content: [
      'Our workshop is located in the university engineering building. It is divided into four zones: the composites layup area, the machining zone, the avionics bench, and the static test stand.',
      'The composites area features a vacuum-bagging system and a temperature-controlled curing oven. This is where we lay up the carbon-fiber airframes and fin cans.',
      'The avionics bench is where the magic happens — solder irons, oscilloscopes, and a 3D printer for prototyping enclosures. The flight computer for Great Hammerhead is being assembled here right now.',
      'The static test stand sits at the far end, behind a reinforced blast wall. It is connected to a data acquisition system that records thrust, chamber pressure, and temperature at 1 kHz.',
    ],
  },
  {
    id: 'recruitment-open',
    title: 'Recruitment is Open — Join the Crew',
    category: 'Events',
    date: '2026-01-08',
    dateLabel: 'Jan 8, 2026',
    author: 'Clara Mata',
    readTime: '2 min read',
    excerpt: 'We are recruiting new members for the 2026 season. No prior experience required — just curiosity and commitment. Applications close February 15.',
    image: IMAGES.teamWorking2,
    content: [
      'Hammerhead Aerospace is opening recruitment for the 2026 season. We are looking for students from any discipline — engineering, physics, computer science, business, and more.',
      'No prior rocketry experience is required. We provide training in all areas: structures, avionics, propulsion, recovery, aerodynamics, and business. What we ask for is curiosity, commitment, and a willingness to learn.',
      'Applications are open until February 15. Visit our Join Us page to apply, or come to our info session on January 22 at the university engineering building.',
    ],
  },
  {
    id: 'flight-computer-v2',
    title: 'Flight Computer v2: Telemetry at 10 km Range',
    category: 'Technical',
    date: '2025-12-10',
    dateLabel: 'Dec 10, 2025',
    author: 'Anna Garcia',
    readTime: '5 min read',
    excerpt: 'Our second-generation flight computer features dual-redundant IMU, GPS, and an LoRa telemetry downlink capable of 10 km real-time data transmission.',
    image: IMAGES.circuitBoard,
    content: [
      'The flight computer is the brain of every rocket. Our v2 board, designed for Great Hammerhead, represents a significant upgrade over the v1 used in Bullhead.',
      'Key improvements: dual-redundant IMU for fault tolerance, a u-blox GPS module for position tracking, and an LoRa radio operating at 868 MHz capable of transmitting real-time telemetry to 10 km.',
      'The board runs a custom RTOS-based firmware written in C. It handles sensor fusion, event detection (liftoff, apogee, main deploy), and telemetry downlink — all while logging to onboard flash at 100 Hz.',
      'The ground station software, also student-built, displays live altitude, velocity, acceleration, and attitude data on a mission-control style dashboard. We tested it during the Bullhead qualification flight with excellent results.',
    ],
  },
];

export interface Sponsor {
  id: string;
  name: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  description: string;
}

export const sponsors: Sponsor[] = [
  { id: 'bcn-aero', name: 'BCN Aerospace', tier: 'platinum', description: 'Composite materials & workshop access' },
  { id: 'propulsion-labs', name: 'Propulsion Labs', tier: 'platinum', description: 'Motor casing & propellant supplies' },
  { id: 'circuit-co', name: 'CircuitCo', tier: 'gold', description: 'PCB fabrication & electronic components' },
  { id: 'ib3d', name: 'IB3D Manufacturing', tier: 'gold', description: 'SLS 3D printing services' },
  { id: 'cat-bank', name: 'Catalunya Bank Foundation', tier: 'gold', description: 'Competition travel funding' },
  { id: 'aero-sim', name: 'AeroSim Software', tier: 'silver', description: 'CFD simulation licenses' },
  { id: 'metal-works', name: 'MetalWorks BCN', tier: 'silver', description: 'CNC machining services' },
  { id: 'campus-eat', name: 'CampusEat', tier: 'bronze', description: 'Team meals during build sessions' },
  { id: 'tech-print', name: 'TechPrint', tier: 'bronze', description: 'Printing & promotional materials' },
  { id: 'upc', name: 'Universitat Politècnica de Catalunya', tier: 'platinum', description: 'University affiliation & facilities' },
];

export const sponsorTiers = [
  {
    name: 'Platinum',
    benefits: ['Logo on rocket body', 'Mention in all press releases', 'Priority access to team recruitment', 'Annual mission report'],
    color: 'text-sky-light',
  },
  {
    name: 'Gold',
    benefits: ['Logo on team apparel', 'Mention in social media', 'Access to team recruitment', 'Workshop tour invitation'],
    color: 'text-sky',
  },
  {
    name: 'Silver',
    benefits: ['Logo on website', 'Social media mention', 'Newsletter feature'],
    color: 'text-sky-light/80',
  },
  {
    name: 'Bronze',
    benefits: ['Logo on website', 'Newsletter mention'],
    color: 'text-sky-light/60',
  },
];

export const stats = [
  { label: 'Rockets Built', value: '4' },
  { label: 'Test Fires', value: '12' },
  { label: 'Team Members', value: '35' },
  { label: 'Competitions', value: '3' },
  { label: 'Max Altitude', value: '4.1 km' },
];
