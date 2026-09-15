import type { City, Service } from "@/config/site";

const copy: Record<string, string> = {
  "dayton-oh:plumbing":
    "A Dayton plumbing request is usually an older Miami Valley house: tight lots, an unfinished basement, and a mix of galvanized, copper, and later PVC. AES Ohio is the electric bill, not the plumber — but a winter outage is when exposed basement lines freeze. We do not publish a Dayton-only price.",
  "dayton-oh:drain-cleaning":
    "Dayton drain jobs often start in pre-war and postwar laterals under older city lots — clay, cast iron, or a later patch. Roots and grease in alley-accessible mains show up more than a brand-new subdivision clog. This page is not a city survey of drain prices.",
  "dayton-oh:water-heater":
    "Most Dayton tanks sit on a basement pad. Fuel type (gas vs electric on an AES Ohio bill) and whether the vent and drain pan still make sense after a freeze-thaw week belong in the first note. We will not invent a Dayton water-heater dollar figure.",
  "dayton-oh:emergency-plumbing":
    "Emergency calls in Dayton after a polar-vortex night are often a burst basement line, a hose bib that was never shut off, or sewage backing up on an older lot. Say so on the form. Emergency work is a different queue than a Saturday faucet.",

  "kettering-oh:plumbing":
    "Kettering plumbing is often a 1950s–70s ranch or split-level on AES Ohio: one or two baths, original laterals, and a short crawlspace. Garage-wall supply freezes when insulation is thin. This is local housing context, not a Kettering price list.",
  "kettering-oh:drain-cleaning":
    "On a Kettering ranch, a slow kitchen or tub line is often the original lateral under a quiet street with mature trees. Access is usually a cleanout in the yard or basement, not an alley. We do not invent a suburb-specific drain price.",
  "kettering-oh:water-heater":
    "Kettering tanks are commonly in a utility closet or garage. An electric unit ties to the AES Ohio service; a gas unit needs venting that still works after decades of ice-season cycling. Ask for a written swap scope, not a number we made up for this ZIP.",
  "kettering-oh:emergency-plumbing":
    "A Kettering emergency after a hard freeze is often a garage-wall line or a hose bib that split. Mid-century ranches lose heat in those corners first. Mark the form emergency if water is running or the house has no water.",

  "beavercreek-oh:plumbing":
    "Beavercreek lots near Wright-Patterson are wider than Dayton city lots, but AES Ohio bills and winter freeze still apply. Newer subdivisions hide older laterals on some streets. Longer supply runs to extra baths are the local pattern — not a Beavercreek price we invented.",
  "beavercreek-oh:drain-cleaning":
    "Beavercreek drain work is often a subdivision main or a kitchen line in a house with more fixtures than a Huber ranch. HOA-front yards change where a cleanout can be opened. National published ranges are the only dollars on this page.",
  "beavercreek-oh:water-heater":
    "Beavercreek water heaters sit in basements, garages, or utility rooms on AES Ohio. Extra bathrooms change recovery more than a city-lot bungalow. We cite a national range only; we will not invent a Wright-Patt-adjacent price.",
  "beavercreek-oh:emergency-plumbing":
    "Emergency plumbing in Beavercreek after a polar-vortex night is still burst hose bibs and unheated additions — wider lots do not skip freeze. If a line is open or sewage is up, say emergency on the form.",

  "centerville-oh:plumbing":
    "Centerville colonials in the Washington Township overlap have more bathrooms and longer copper or PEX runs than a Kettering ranch. AES Ohio is typical. Ice-season slab and crawlspace leaks belong in the first visit notes. No Centerville-only dollar amount lives here.",
  "centerville-oh:drain-cleaning":
    "A Centerville two-story can back up a hall bath while the kitchen still drains — longer runs and more fixtures. Historic-core access is tighter than a later township street. We do not publish a local drain survey.",
  "centerville-oh:water-heater":
    "More fixtures in a Centerville colonial change tank size questions. Gas vs electric (AES Ohio) and whether the current pad and vent survive an ice-season leak are the first filters. National ranges only.",
  "centerville-oh:emergency-plumbing":
    "Centerville emergencies after freeze-thaw are often a slab leak or a crawlspace line that opened overnight. A two-story with kids in school is still an emergency if water is in the floor. Mark the form accordingly.",

  "huber-heights-oh:plumbing":
    "Huber Heights brick ranches from the 1950s–70s still run a lot of original supply. AES Ohio is the usual bill. The garage utility wall was never meant to stay warm. This page explains housing, not a Huber-only price.",
  "huber-heights-oh:drain-cleaning":
    "Huber drain clogs are often kitchen grease or a tub line in a one-bath ranch with a short run to the street. Roots under older laterals show up on postwar streets. We will not invent a northern-suburb drain number.",
  "huber-heights-oh:water-heater":
    "Many Huber tanks sit in a garage or utility alcove that gets cold. Electric units sit on an AES Ohio circuit; gas needs a vent that still drafts. A one-for-one swap is a different visit than a fuel change. National ranges only.",
  "huber-heights-oh:emergency-plumbing":
    "A Huber Heights emergency in winter is often the garage-wall supply or a vacant ranch that lost heat. If water is spraying or the house has none, use emergency on the form — not a planned faucet swap.",

  "fairborn-oh:plumbing":
    "Fairborn plumbing splits between older downtown houses and military-adjacent housing next to Wright-Patterson. AES Ohio is typical. Crawlspaces that were never sealed are the local access problem. We do not invent a Fairborn price.",
  "fairborn-oh:drain-cleaning":
    "Downtown Fairborn laterals and military-era housing clog differently: older clay vs newer plastic, different cleanout locations. Say which fixture is slow. This is not a city drain-price survey.",
  "fairborn-oh:water-heater":
    "Fairborn tanks sit in crawlspace-adjacent utility rooms or basements. Roof and floor access can be tighter than a Beavercreek garage. Fuel type on an AES Ohio or gas bill belongs in the note. National published ranges only.",
  "fairborn-oh:emergency-plumbing":
    "Fairborn emergency calls after a polar-vortex night are often a crawlspace line that froze, then opened. Military-adjacent houses that sit empty between orders freeze faster. Mark emergency if water is running or off entirely.",

  "miamisburg-oh:plumbing":
    "Miamisburg hillside lots and downtown two-stories are tighter to stage than a Huber ranch. AES Ohio serves most homes. Older clay laterals and river-adjacent basements are the local pattern. We will not invent a river-view plumbing price.",
  "miamisburg-oh:drain-cleaning":
    "Historic downtown Miamisburg laterals can be clay; hillside houses add long runs and hard cleanout access. A kitchen clog on the bluff is not the same job as a Kettering ranch. National drain ranges only.",
  "miamisburg-oh:water-heater":
    "Getting a tank in or out of a Miamisburg hillside or downtown two-story is the access question. Fuel and vent still matter; AES Ohio is the electric side. We cite national replacement ranges, not a Miamisburg survey.",
  "miamisburg-oh:emergency-plumbing":
    "Emergency plumbing on a Miamisburg hillside after a freeze is often an exposed crawlspace line. River-adjacent basements add sewage-backup risk when a main is blocked. Say emergency if water is in the house or the line is open.",

  "xenia-oh:plumbing":
    "Xenia blocks mix older Greene County stock with post-storm rebuilds. AES Ohio is typical. The plumbing in a rebuild next door does not tell you what is in your walls. Winter freeze and wind-driven cold still hit older pipes. No Xenia-only price.",
  "xenia-oh:drain-cleaning":
    "A Xenia drain job depends on whether the lateral is older stock or a post-storm replacement. Roots and grease still clog both. We do not invent a Greene County drain number to fill this page.",
  "xenia-oh:water-heater":
    "If a Xenia roof and utility room were rebuilt after storm damage, the tank may be newer than the house next door. If not, age and venting are the first questions. AES Ohio vs gas belongs on the form. National ranges only.",
  "xenia-oh:emergency-plumbing":
    "Xenia emergencies after wind-driven cold are burst older lines, not a rebuild’s new PEX. If a pipe is open or sewage is up, mark emergency. A storm-history block is a reason to inspect, not a reason we publish a local price.",

  "vandalia-oh:plumbing":
    "Vandalia ranches and tri-levels on the I-70 / airport corridor are simpler geometry than a Centerville colonial. AES Ohio is the usual bill. Freeze shows up in low utility rooms and unheated additions. We do not invent an airport-corridor price.",
  "vandalia-oh:drain-cleaning":
    "Vandalia drain work is often a ranch kitchen or a tri-level hall bath with a short run. Airport-adjacent wind does not change a clog; laterals and roots do. National published drain ranges only.",
  "vandalia-oh:water-heater":
    "Vandalia tanks sit in low utility rooms that get cold. A one-for-one swap on a ranch is different access than a two-story Centerville pad. Electric units sit on AES Ohio; gas needs venting. National ranges only.",
  "vandalia-oh:emergency-plumbing":
    "A Vandalia emergency after a Miami Valley cold snap is often a utility-room line or an unheated addition. Vacant or lightly heated houses on the I-70 corridor freeze faster. Use emergency on the form if water is running or gone.",

  "springfield-oh:plumbing":
    "Springfield’s older city lots and brick two-stories in Clark County often have unfinished basements and aging laterals. AES Ohio is common. This is Miami Valley-adjacent housing context, not a Springfield price list we invented.",
  "springfield-oh:drain-cleaning":
    "Springfield drain clogs in older laterals (clay, cast iron, later patches) are a different job than a new suburban main. Roots under older city lots show up often. We cite a national drain range only.",
  "springfield-oh:water-heater":
    "Springfield tanks usually sit in unfinished basements that get cold when heat is cut back. Fuel type and venting in older brick houses matter more than a brand we will not rank. National replacement ranges only.",
  "springfield-oh:emergency-plumbing":
    "Springfield emergency calls in winter are often a basement supply that froze, then opened, in an older unfinished cellar. If water is on the floor or the house has none, mark emergency. We still do not publish a city-specific dollar amount.",

  "tipp-city-oh:plumbing":
    "Tipp City splits between a canal-era downtown and later Miami County subdivisions north of Dayton. AES Ohio is typical. Downtown crawlspaces and newer slabs are different plumbing jobs. We will not invent a Tipp-only price.",
  "tipp-city-oh:drain-cleaning":
    "Downtown Tipp laterals can be older; later subdivision mains are newer plastic. Say whether you are in the historic core or a later street. Roots and grease still clog both. National drain ranges only.",
  "tipp-city-oh:water-heater":
    "A downtown Tipp crawlspace tank is a different carry than a later subdivision garage. Electric vs gas (AES Ohio on the bill) belongs in the note. We cite national replacement ranges, not a Miami County survey.",
  "tipp-city-oh:emergency-plumbing":
    "Tipp City emergencies after a freeze hit historic downtown crawlspaces first; later slabs usually fail at hose bibs or unfinished bonus rooms. If a line is open or there is no water, mark emergency on the form.",

  "oakwood-oh:plumbing":
    "Oakwood plumbing is often an early 20th-century Tudor, colonial, or foursquare on a tree-lined lot immediately south of Dayton. AES Ohio is typical. Older galvanized or copper under a short crawlspace is a different job than a later Kettering ranch slab. We will not invent an Oakwood-only price.",
  "oakwood-oh:drain-cleaning":
    "On an Oakwood two-story, a slow kitchen or hall bath is often the original lateral under a tree-lined street. Roots and grease in older clay or cast iron show up more than a brand-new subdivision clog. We do not invent an inner-ring drain price.",
  "oakwood-oh:water-heater":
    "Oakwood tanks usually sit in an unfinished basement or a short crawlspace on an early 20th-century lot. Getting a tank in or out of a Tudor or foursquare is tighter access than a Kettering garage. Electric units sit on AES Ohio; gas needs a vent that still drafts. National ranges only.",
  "oakwood-oh:emergency-plumbing":
    "An Oakwood emergency after a polar-vortex night is often a crawlspace line or a hose bib that split on older stock. Tree-lined lots do not skip freeze. If a line is open or the house has no water, mark emergency on the form.",

  "west-carrollton-oh:plumbing":
    "West Carrollton plumbing is often a 1950s–70s ranch or split-level on the I-75 / Dixie Drive corridor, with older downtown stock near Central Avenue. AES Ohio is typical. Flatter river-valley lots than a Miamisburg hillside; original laterals and garage-wall supply are a different job than an Oakwood Tudor crawlspace. We will not invent a West Carrollton-only price.",
  "west-carrollton-oh:drain-cleaning":
    "On a West Carrollton ranch, a slow kitchen or tub line is often the original lateral under a Dixie Drive street with mature trees. Downtown laterals can be older clay or cast iron; later ranch mains are shorter. Roots and grease show up more than a brand-new subdivision clog. We do not invent a river-corridor drain price.",
  "west-carrollton-oh:water-heater":
    "West Carrollton tanks usually sit in a garage, utility alcove, or unfinished basement on a postwar lot. Getting a tank in or out of a ranch is simpler access than a Miamisburg hillside two-story, but river-adjacent crawlspaces still get cold. Electric units sit on AES Ohio; gas needs a vent that still drafts. National ranges only.",
  "west-carrollton-oh:emergency-plumbing":
    "A West Carrollton emergency after a polar-vortex night is often a garage-wall line or a river-adjacent crawlspace pipe that froze, then opened. Postwar ranches lose heat in those corners first. If a line is open or the house has no water, mark emergency on the form.",

  "trotwood-oh:plumbing":
    "Trotwood plumbing is often a 1950s–70s ranch or modest two-story on the Salem Avenue / SR 49 corridor northwest of Dayton. AES Ohio is typical. Inner-ring lots are flatter than a Miamisburg hillside; original laterals and garage-wall supply are a different job than a Vandalia airport-corridor tri-level. We will not invent a Trotwood-only price.",
  "trotwood-oh:drain-cleaning":
    "On a Trotwood ranch, a slow kitchen or tub line is often the original lateral under a Salem Avenue street with mature trees. Inner-ring laterals can be older clay or cast iron; later ranch mains are shorter. Roots and grease show up more than a brand-new subdivision clog. We do not invent a northwest-corridor drain price.",
  "trotwood-oh:water-heater":
    "Trotwood tanks usually sit in a garage, utility alcove, or unfinished basement on a postwar Salem-corridor lot. Getting a tank in or out of a ranch is simpler access than a Dayton city two-story, but unheated garage walls still get cold. Electric units sit on AES Ohio; gas needs a vent that still drafts. National ranges only.",
  "trotwood-oh:emergency-plumbing":
    "A Trotwood emergency after a polar-vortex night is often a garage-wall line or a postwar crawlspace pipe that froze, then opened. Salem Avenue / SR 49 ranches lose heat in those corners first. If a line is open or the house has no water, mark emergency on the form.",

  "englewood-oh:plumbing":
    "Englewood plumbing splits between an older National Road (US-40) core and later I-70-adjacent subdivisions northwest of Dayton. AES Ohio is typical. Downtown two-stories with unfinished basements or short crawlspaces are a different job than a later subdivision garage-wall run. We will not invent an Englewood-only price.",
  "englewood-oh:drain-cleaning":
    "On an Englewood National Road street, a slow kitchen or hall bath is often the original lateral under the older core. Later I-70 subdivision mains are newer plastic with shorter runs. Roots and grease still clog both. We do not invent a US-40-corridor drain price.",
  "englewood-oh:water-heater":
    "An Englewood tank in the older National Road core usually sits in an unfinished basement or short crawlspace; later I-70 subdivision tanks sit in a garage or utility alcove. Getting a tank in or out of a downtown two-story is tighter access than a later ranch. Electric units sit on AES Ohio; gas needs a vent that still drafts. National ranges only.",
  "englewood-oh:emergency-plumbing":
    "An Englewood emergency after a polar-vortex night is often a National Road crawlspace line in the older core, or a hose bib / garage-wall split on a later I-70 subdivision lot. The two housing stocks fail in different corners. If a line is open or the house has no water, mark emergency on the form.",

  "riverside-oh:plumbing":
    "Riverside plumbing splits between older east-Dayton stock on the Harshman / Airway corridor and later Wright-Patt-adjacent subdivision streets. AES Ohio is typical. Unfinished-basement galvanized or copper on an older east-side lot is a different job than a later garage-wall run toward the base. We will not invent a Riverside-only price.",
  "riverside-oh:drain-cleaning":
    "On an older Riverside east-side street, a slow kitchen or hall bath is often the original lateral under a Harshman- or Airway-corridor lot. Later subdivision mains toward Wright-Patt are newer plastic with shorter runs. Roots and grease still clog both. We do not invent an east-Dayton drain price.",
  "riverside-oh:water-heater":
    "A Riverside tank on older east-side stock usually sits in an unfinished basement or short crawlspace; later Wright-Patt-adjacent subdivision tanks sit in a garage or utility alcove. Getting a tank in or out of an older two-story is tighter access than a later ranch. Electric units sit on AES Ohio; gas needs a vent that still drafts. National ranges only.",
  "riverside-oh:emergency-plumbing":
    "A Riverside emergency after a polar-vortex night is often an older east-side basement line that froze, then opened, or a hose bib / garage-wall split on a later Wright-Patt-adjacent lot. The two housing stocks fail in different corners. If a line is open or the house has no water, mark emergency on the form.",

  "syracuse-ny:plumbing":
    "Syracuse plumbing splits between older Eastwood bungalows and Strathmore two-stories and later Onondaga County subdivision streets. National Grid is typical. Unfinished-basement galvanized or copper on an Eastwood lot is a different job than a later Cicero or Clay garage-wall run. We will not invent a Syracuse-only price.",
  "syracuse-ny:drain-cleaning":
    "On an Eastwood or Strathmore street, a slow kitchen or hall bath is often the original lateral under an older city lot. Later suburban mains toward Cicero or Clay are newer plastic with shorter runs. Roots and lake-effect freeze-thaw still clog both. We do not invent a Central New York drain price.",
  "syracuse-ny:water-heater":
    "A Syracuse tank in Eastwood or Strathmore usually sits in an unfinished basement; later subdivision tanks sit in a garage or utility alcove. Getting a tank in or out of a Strathmore two-story is tighter access than a later ranch. Electric units sit on National Grid; gas needs a vent that still drafts. National ranges only.",
  "syracuse-ny:emergency-plumbing":
    "A Syracuse emergency after a lake-effect week and a polar-vortex night is often an Eastwood or Strathmore basement line that froze, then opened, or a hose bib / garage-wall split on a later lot. The two housing stocks fail in different corners. If a line is open or the house has no water, mark emergency on the form.",

  "toledo-oh:plumbing":
    "Toledo plumbing splits between Old West End Victorians and other pre-war city two-stories and later suburban streets toward Sylvania and Perrysburg. Toledo Edison is typical. Unfinished-basement laterals on a Maumee-adjacent lot are a different job than a later subdivision garage-wall run. We will not invent a Toledo-only price.",
  "toledo-oh:drain-cleaning":
    "On an Old West End street, a slow kitchen or hall bath is often the original lateral under a Victorian lot. Later suburban mains toward Sylvania or Perrysburg are newer plastic with shorter runs. Roots and grease still clog both. We do not invent a Maumee-corridor drain price.",
  "toledo-oh:water-heater":
    "A Toledo tank in the Old West End usually sits in an unfinished basement; later suburban tanks sit in a garage or utility alcove. Getting a tank in or out of a Victorian two-story is tighter access than a later ranch. Electric units sit on Toledo Edison; gas needs a vent that still drafts. National ranges only.",
  "toledo-oh:emergency-plumbing":
    "A Toledo emergency after a northwest-Ohio polar-vortex night is often an Old West End basement line that froze, then opened, or a hose bib / garage-wall split on a later Sylvania- or Perrysburg-facing lot. River-adjacent crawlspaces fail in a different corner. If a line is open or the house has no water, mark emergency on the form.",
};

export function uniqueLocalCopy(city: City, service: Service): string {
  const key = `${city.slug}:${service.slug}`;
  const paragraph = copy[key];
  if (!paragraph) {
    throw new Error(`Missing unique local copy for ${key}`);
  }
  return paragraph;
}
