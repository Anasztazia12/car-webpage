/* =========================================================
   CarnovoX Motor — site behavior, i18n (HU/EN) & car inventory
   ========================================================= */

(function () {
  "use strict";

  /* ---------------- i18n dictionary ---------------- */
  const I18N = {
    hu: {
      title_home: "CarnovoX Motor | Megbízható használt autók",
      desc_home: "CarnovoX Motor – ellenőrzött, garanciával értékesített használt autók. Átlátható árazás, rugalmas finanszírozás, gyors ügyintézés.",
      title_cars: "Autóink | CarnovoX Motor",
      desc_cars: "Böngéssz ellenőrzött, garanciával értékesített használt autóink között — szűrj márka, ár, üzemanyag és karosszéria szerint.",
      title_about: "Rólunk | CarnovoX Motor",
      desc_about: "Ismerd meg a CarnovoX Motor történetét, csapatát és értékeit — 2012 óta segítjük ügyfeleinket megbízható használt autók megtalálásában.",

      nav_home: "Főoldal",
      nav_cars: "Autóink",
      nav_about: "Rólunk",
      nav_contact: "Kapcsolat",
      aria_menu_toggle: "Menü megnyitása",
      btn_browse_header: "Autók böngészése",
      btn_get_quote_header: "Ajánlatkérés",

      hero_eyebrow: "★ 4.9/5 vevői elégedettség · 1500+ eladott autó",
      hero_title_1: "Találd meg álmaid autóját — ",
      hero_title_accent: "garanciával",
      hero_title_2: ", átláthatóan",
      hero_lead: "Minden autónk átesik egy 120 pontos műszaki és eredetiségvizsgálaton, mielőtt felkerül a kínálatunkba. Nálunk nincsenek rejtett hibák, csak megbízható autók.",
      hero_cta_browse: "Böngéssz az autóink között",
      hero_cta_quote: "Ajánlatkérés",
      hero_trust_1: "12 hónap garancia",
      hero_trust_2: "Ellenőrzött futásteljesítmény",
      hero_trust_3: "Finanszírozás 24 órán belül",
      hero_visual_alt: "Kiemelt autó",
      hero_badge_title: "Ellenőrzött minőség",
      hero_badge_sub: "120 pontos átvizsgálás minden autón",

      label_search: "Keresés",
      ph_search_example: "Pl. Passat, 320d...",
      label_brand: "Márka",
      label_body: "Karosszéria",
      label_fuel: "Üzemanyag",
      label_price: "Ár",
      opt_all_brands: "Összes márka",
      opt_any_body: "Bármilyen",
      opt_any_fuel: "Bármilyen",
      opt_any_price: "Bármennyi",
      opt_body_sedan: "Limuzin",
      opt_body_suv: "SUV",
      opt_body_kombi: "Kombi",
      opt_body_hatchback: "Ferdehátú",
      opt_fuel_diesel: "Dízel",
      opt_fuel_petrol: "Benzin",
      opt_fuel_hybrid: "Hibrid",
      opt_fuel_electric: "Elektromos",
      btn_search: "Keresés",

      stat_experience: "év tapasztalat",
      stat_sold: "eladott autó",
      stat_satisfaction: "elégedett ügyfél",
      stat_inspection: "műszaki átvizsgálás",

      tag_featured: "Kiemelt ajánlatok",
      heading_featured: "Népszerű autóink",
      desc_featured: "Kézzel válogatott, ellenőrzött állapotú autók — a teljes kínálatunkat az Autóink oldalon találod.",
      btn_view_all_cars: "Összes autó megtekintése",

      badge_certified: "Ellenőrzött",
      badge_sale: "Akció",
      badge_new: "Új",
      fav_aria: "Kedvencekhez adás",
      spec_automatic: "Automata",
      spec_manual: "Manuális",
      spec_dizel: "Dízel",
      spec_benzin: "Benzin",
      spec_hibrid: "Hibrid",
      spec_elektromos: "Elektromos",
      installment_template: "havi {n}-tól",
      btn_details: "Részletek",
      btn_interested: "Érdekel",
      label_engine: "Motor",
      label_power: "Teljesítmény",
      label_drivetrain: "Hajtás",
      label_gearbox: "Váltó",

      tag_why: "Miért mi?",
      heading_why: "Amiért ügyfeleink minket választanak",
      desc_why: "Nem csak autót adunk el — nyugalmat és biztonságot is a vásárlás mellé.",
      feature1_title: "Ellenőrzött autók",
      feature1_desc: "Minden jármű 120 pontos műszaki és eredetiségvizsgálaton esik át, mielőtt kínálatunkba kerül.",
      feature2_title: "Átlátható árazás",
      feature2_desc: "Nincsenek rejtett költségek — a hirdetett ár a végső ár, a teljes szervizkönyvet megmutatjuk.",
      feature3_title: "Rugalmas finanszírozás",
      feature3_desc: "Banki partnereinkkel személyre szabott hitel- és lízingkonstrukciókat kínálunk, gyors elbírálással.",
      feature4_title: "Garancia & ügyfélszolgálat",
      feature4_desc: "Minden autónkra garanciát vállalunk, vásárlás után is elérhető szakértői ügyfélszolgálattal.",

      tag_process: "Folyamat",
      heading_process: "Így megy nálunk az autóvásárlás",
      desc_process: "Négy egyszerű lépésben, felesleges bürokrácia nélkül.",
      step1_title: "Böngéssz a kínálatban",
      step1_desc: "Szűrj márka, ár vagy típus szerint, és találd meg a hozzád illő autót.",
      step2_title: "Foglalj bemutatót",
      step2_desc: "Egyeztess velünk egy időpontot személyes megtekintésre és próbaútra.",
      step3_title: "Teszteld le nyugodtan",
      step3_desc: "Próbáld ki az autót, tekintsd át a szervizkönyvet és a vizsgálati jegyzőkönyvet.",
      step4_title: "Vidd haza",
      step4_desc: "Intézzük az ügyintézést és a finanszírozást, te csak az új autódra figyelj.",

      tag_testimonials: "Vélemények",
      heading_testimonials: "Amit ügyfeleink mondanak",
      testimonial1_quote: "„Végre egy autókereskedő, aki tényleg mindent elmondott az autóról. A vizsgálati jegyzőkönyvet előre elküldték, semmi meglepetés nem ért.”",
      testimonial1_role: "BMW 320d tulajdonos",
      testimonial2_quote: "„A finanszírozást egy nap alatt elintézték, a teljes folyamat gördülékeny és stresszmentes volt. Csak ajánlani tudom.”",
      testimonial2_role: "Audi A4 tulajdonos",
      testimonial3_quote: "„Vásárlás után fél évvel egy apró hibát a garancia keretében ingyen javítottak. Ritka, hogy egy kereskedő ennyire kiálljon az autói mögött.”",
      testimonial3_role: "Škoda Superb tulajdonos",

      cta_home_title: "Készen állsz a következő autódra?",
      cta_home_desc: "Foglalj személyes bemutatót, vagy kérj ingyenes ajánlatot még ma.",
      cta_home_btn2: "Kapcsolatfelvétel",

      tag_contact: "Kapcsolat",
      heading_contact: "Lépj velünk kapcsolatba",
      desc_contact: "Kérdésed van egy autóval kapcsolatban, vagy szeretnél időpontot foglalni? Írj nekünk, hamarosan válaszolunk.",
      label_location: "Telephely",
      label_phone_info: "Telefon",
      label_email_info: "E-mail",
      label_hours: "Nyitvatartás",
      hours_value: "H–P: 8:00–18:00 · Szo: 9:00–13:00",
      contact_address: "1051 Budapest, József Attila utca 6.",
      contact_phone_display: "+36 30 123 4567",
      contact_phone_href: "tel:+36301234567",
      contact_email_display: "info@carnovoxmotor.hu",
      contact_email_href: "mailto:info@carnovoxmotor.hu",
      map_href: "https://www.bing.com/maps/search?mepi=57~~Embedded~LargeMapLink&ty=18&v=2&sV=1&qpvt=london,+United+Kingdom+71%E2%80%9375+Shelton+Street,+London+WC2H+9JQ,+United+Kingdom&FORM=MIRE&style=r&q=Budapest+Jozsef+Attila+utca+6&cp=47.498882~19.049433&lvl=16",
      map_embed_src: "https://www.google.com/maps?q=47.498882,19.049433&z=16&output=embed",
      map_open_label: "Megnyitás térképen",
      form_success_msg: "Köszönjük! Üzenetedet megkaptuk, hamarosan felvesszük veled a kapcsolatot.",
      label_name: "Teljes név *",
      ph_name: "Kovács János",
      label_phone_field: "Telefonszám *",
      label_email_field: "E-mail cím *",
      ph_email: "nev@email.hu",
      label_topic: "Érdeklődés tárgya",
      topic_buy: "Autóvásárlás",
      topic_financing: "Finanszírozás",
      topic_viewing: "Bemutató időpont",
      topic_other: "Egyéb kérdés",
      label_message: "Üzenet *",
      ph_message: "Írd le, miben segíthetünk...",
      btn_send: "Üzenet küldése",
      form_note: "A küldéssel elfogadod adatvédelmi tájékoztatónkat. Munkatársaink általában 1 munkanapon belül válaszolnak.",

      footer_about: "Megbízható használt autók, átlátható folyamatokkal és garanciával. 2012 óta segítjük ügyfeleinket a tökéletes autó megtalálásában.",
      footer_quicklinks: "Gyorslinkek",
      footer_brands: "Márkák",
      footer_contact: "Elérhetőség",
      footer_rights: "Minden jog fenntartva.",
      footer_privacy: "Adatvédelem",
      footer_terms: "ÁSZF",

      breadcrumb_home: "Főoldal",
      breadcrumb_cars: "Autóink",
      breadcrumb_about: "Rólunk",

      page_cars_title: "Teljes autókínálatunk",
      page_cars_desc: "Ellenőrzött, garanciával értékesített autók várják, hogy megtaláld a hozzád illőt. Szűrj márka, ár vagy üzemanyag szerint.",
      label_sort: "Rendezés:",
      sort_newest: "Legújabb",
      sort_price_asc: "Ár szerint növekvő",
      sort_price_desc: "Ár szerint csökkenő",
      sort_km_asc: "Legkevesebb futott km",
      btn_reset_filters: "Szűrők törlése",
      results_suffix: "autó megjelenítve",
      empty_pre: "Nincs a szűrésnek megfelelő autó. Próbálj más feltételeket, vagy ",
      empty_link: "kérj személyre szabott ajánlatot",
      load_more: "Több autó betöltése",
      cta_cars_title: "Nem találod, amit keresel?",
      cta_cars_desc: "Mondd el, milyen autót keresel, és mi megkeressük neked a piacon.",
      cta_cars_btn: "Egyedi keresés indítása",

      page_about_title: "A CarnovoX Motor története",
      page_about_desc: "2012 óta segítjük ügyfeleinket abban, hogy megtalálják a hozzájuk illő autót — átláthatóan, megbízhatóan, garanciával.",
      story_tag: "A kezdetek",
      story_title: "Egy kis budapesti telephelyből mára a régió megbízható autókereskedése",
      story_p1: "A CarnovoX Motort 2012-ben alapítottuk azzal a céllal, hogy megváltoztassuk, milyen a használtautó-vásárlás. Túl sok vevő szerzett rossz tapasztalatot elhallgatott hibákkal, tekert kilométeróra-állással és nyomott alkuval teli folyamatokkal.",
      story_p2: "Mi egy egyszerű elvet követünk: minden autót úgy vizsgálunk át és árazunk, mintha a sajátunknak vennénk. Ez a hozzáállás segített felépíteni egy csapatot és egy ügyfélkört, amely ma is bízik bennünk.",
      story_p3: "Mára évente több száz autót értékesítünk, saját műszaki vizsgálati protokollal, finanszírozási partnerhálózattal és garanciavállalással — miközben a személyes, ügyfélközpontú hozzáállásunkat nem adtuk fel.",
      values_tag: "Értékeink",
      values_title: "Amire az üzletünket építettük",
      values_desc: "Négy alapelv, amely minden döntésünket meghatározza.",
      value1_title: "Megbízhatóság",
      value1_desc: "Amit ígérünk, azt betartjuk — a szervizkönyvtől a leszállítási időpontig.",
      value2_title: "Átláthatóság",
      value2_desc: "Teljes előtörténet, valós kilométeróra-állás, világos árazás — mindig.",
      value3_title: "Ügyfélközpontúság",
      value3_desc: "Nem az eladás a cél, hanem hogy elégedett legyél az autóddal évekkel később is.",
      value4_title: "Szakértelem",
      value4_desc: "Csapatunk minden tagja gépjárműipari háttérrel és képzettséggel rendelkezik.",
      milestones_tag: "Mérföldkövek",
      milestones_title: "Fejlődésünk az évek során",
      timeline1_title: "Az alapítás éve",
      timeline1_desc: "Megnyitottuk első telephelyünket Budapesten, mindössze 12 autóval a kínálatunkban.",
      timeline2_title: "Saját műszaki vizsgálati protokoll",
      timeline2_desc: "Kidolgoztuk 120 pontos ellenőrzési rendszerünket, amelyet azóta is minden autón elvégzünk.",
      timeline3_title: "Finanszírozási partnerhálózat",
      timeline3_desc: "Együttműködést indítottunk vezető pénzintézetekkel a gyors, rugalmas hitelbírálatért.",
      timeline4_title: "1500. eladott autónk",
      timeline4_desc: "Mára több ezer elégedett ügyfelet szolgáltunk ki, 98%-os ügyfél-elégedettség mellett.",
      team_tag: "Csapatunk",
      team_title: "Ismerd meg a csapatot",
      team_desc: "Tapasztalt szakértők, akik segítenek megtalálni a hozzád illő autót.",
      team1_name: "Horváth Gábor",
      team1_role: "Alapító & ügyvezető",
      team2_name: "Tóth Anna",
      team2_role: "Értékesítési vezető",
      team3_name: "Kiss Balázs",
      team3_role: "Vezető autószerelő",
      team4_name: "Varga Dóra",
      team4_role: "Finanszírozási tanácsadó",
      badges_tag: "Miért bízhatsz bennünk",
      badges_title: "Tanúsítványaink és garanciáink",
      badge1_title: "12 hónap garancia",
      badge1_sub: "Minden autónkra",
      badge2_title: "Eredetiségvizsgálat",
      badge2_sub: "Minden autón elvégezve",
      badge3_title: "Ügyvédi szerződés",
      badge3_sub: "Minden adásvételnél",
      badge4_title: "Pénzügyi partnerek",
      badge4_sub: "Vezető bankokkal",
      cta_about_title: "Ismerkedjünk meg személyesen",
      cta_about_desc: "Látogass el telephelyünkre, vagy böngéssz online kínálatunkban."
    },

    en: {
      title_home: "CarnovoX Motor | Trusted Used Cars",
      desc_home: "CarnovoX Motor – inspected, warranty-backed used cars. Transparent pricing, flexible financing, fast paperwork.",
      title_cars: "Our Cars | CarnovoX Motor",
      desc_cars: "Browse our inspected, warranty-backed used cars — filter by brand, price, fuel type and body style.",
      title_about: "About Us | CarnovoX Motor",
      desc_about: "Get to know CarnovoX Motor's story, team and values — helping customers find reliable used cars since 2012.",

      nav_home: "Home",
      nav_cars: "Our Cars",
      nav_about: "About Us",
      nav_contact: "Contact",
      aria_menu_toggle: "Open menu",
      btn_browse_header: "Browse Cars",
      btn_get_quote_header: "Get a Quote",

      hero_eyebrow: "★ 4.9/5 customer rating · 1,500+ cars sold",
      hero_title_1: "Find your dream car — ",
      hero_title_accent: "with warranty",
      hero_title_2: ", transparently",
      hero_lead: "Every car we sell passes a 120-point technical and history inspection before it joins our inventory. No hidden defects — just cars you can trust.",
      hero_cta_browse: "Browse our cars",
      hero_cta_quote: "Get a quote",
      hero_trust_1: "12-month warranty",
      hero_trust_2: "Verified mileage",
      hero_trust_3: "Financing within 24 hours",
      hero_visual_alt: "Featured car",
      hero_badge_title: "Certified quality",
      hero_badge_sub: "120-point inspection on every car",

      label_search: "Search",
      ph_search_example: "e.g. Passat, 320d...",
      label_brand: "Brand",
      label_body: "Body type",
      label_fuel: "Fuel type",
      label_price: "Price",
      opt_all_brands: "All brands",
      opt_any_body: "Any",
      opt_any_fuel: "Any",
      opt_any_price: "Any",
      opt_body_sedan: "Sedan",
      opt_body_suv: "SUV",
      opt_body_kombi: "Estate",
      opt_body_hatchback: "Hatchback",
      opt_fuel_diesel: "Diesel",
      opt_fuel_petrol: "Petrol",
      opt_fuel_hybrid: "Hybrid",
      opt_fuel_electric: "Electric",
      btn_search: "Search",

      stat_experience: "years of experience",
      stat_sold: "cars sold",
      stat_satisfaction: "satisfied customers",
      stat_inspection: "point inspection",

      tag_featured: "Featured offers",
      heading_featured: "Our popular cars",
      desc_featured: "Hand-picked, inspected cars — see our full inventory on the Our Cars page.",
      btn_view_all_cars: "View all cars",

      badge_certified: "Certified",
      badge_sale: "Sale",
      badge_new: "New",
      fav_aria: "Add to favorites",
      spec_automatic: "Automatic",
      spec_manual: "Manual",
      spec_dizel: "Diesel",
      spec_benzin: "Petrol",
      spec_hibrid: "Hybrid",
      spec_elektromos: "Electric",
      installment_template: "from {n}/month",
      btn_details: "Details",
      btn_interested: "I'm interested",
      label_engine: "Engine",
      label_power: "Power",
      label_drivetrain: "Drivetrain",
      label_gearbox: "Gearbox",

      tag_why: "Why us?",
      heading_why: "Why our customers choose us",
      desc_why: "We don't just sell cars — we sell peace of mind with every purchase.",
      feature1_title: "Inspected cars",
      feature1_desc: "Every vehicle passes a 120-point technical and history check before joining our inventory.",
      feature2_title: "Transparent pricing",
      feature2_desc: "No hidden costs — the advertised price is the final price, and we show the full service history.",
      feature3_title: "Flexible financing",
      feature3_desc: "Together with our banking partners we offer tailored loan and leasing options with fast approval.",
      feature4_title: "Warranty & support",
      feature4_desc: "Every car comes with a warranty, backed by expert customer support even after purchase.",

      tag_process: "Process",
      heading_process: "How buying a car works with us",
      desc_process: "Four simple steps, without unnecessary paperwork.",
      step1_title: "Browse the inventory",
      step1_desc: "Filter by brand, price or body type to find the car that fits you.",
      step2_title: "Book a viewing",
      step2_desc: "Arrange a time with us for an in-person viewing and test drive.",
      step3_title: "Test it with confidence",
      step3_desc: "Try the car and review the service history and inspection report.",
      step4_title: "Drive it home",
      step4_desc: "We handle the paperwork and financing — you just focus on your new car.",

      tag_testimonials: "Testimonials",
      heading_testimonials: "What our customers say",
      testimonial1_quote: "“Finally a car dealer who actually told me everything about the car. The inspection report was sent over in advance — no surprises at all.”",
      testimonial1_role: "BMW 320d owner",
      testimonial2_quote: "“The financing was arranged within a day, the whole process was smooth and stress-free. I can only recommend them.”",
      testimonial2_role: "Audi A4 owner",
      testimonial3_quote: "“Six months after buying, a small issue was fixed for free under warranty. It's rare for a dealer to stand behind their cars like this.”",
      testimonial3_role: "Škoda Superb owner",

      cta_home_title: "Ready for your next car?",
      cta_home_desc: "Book a personal viewing, or request a free quote today.",
      cta_home_btn2: "Get in touch",

      tag_contact: "Contact",
      heading_contact: "Get in touch with us",
      desc_contact: "Have a question about a car, or want to book a viewing? Send us a message and we'll get back to you soon.",
      label_location: "Location",
      label_phone_info: "Phone",
      label_email_info: "Email",
      label_hours: "Opening hours",
      hours_value: "Mon–Fri: 8:00–18:00 · Sat: 9:00–13:00 (CET)",
      contact_address: "71–75 Shelton Street, London WC2H 9JQ, United Kingdom",
      contact_phone_display: "+44 20 7946 0958",
      contact_phone_href: "tel:+442079460958",
      contact_email_display: "international@carnovoxmotor.com",
      contact_email_href: "mailto:international@carnovoxmotor.com",
      map_href: "http://www.71-75.co.uk",
      map_embed_src: "https://www.google.com/maps?q=71-75+Shelton+Street,+London+WC2H+9JQ,+United+Kingdom&z=16&output=embed",
      map_open_label: "Open in Maps",
      form_success_msg: "Thank you! We've received your message and will get back to you shortly.",
      label_name: "Full name *",
      ph_name: "John Smith",
      label_phone_field: "Phone number *",
      label_email_field: "Email address *",
      ph_email: "name@email.com",
      label_topic: "Subject",
      topic_buy: "Buying a car",
      topic_financing: "Financing",
      topic_viewing: "Book a viewing",
      topic_other: "Other question",
      label_message: "Message *",
      ph_message: "Tell us how we can help...",
      btn_send: "Send message",
      form_note: "By submitting, you accept our privacy policy. Our team usually replies within 1 business day.",

      footer_about: "Trusted used cars, with transparent processes and a warranty. Helping customers find their perfect car since 2012.",
      footer_quicklinks: "Quick links",
      footer_brands: "Brands",
      footer_contact: "Contact",
      footer_rights: "All rights reserved.",
      footer_privacy: "Privacy Policy",
      footer_terms: "Terms & Conditions",

      breadcrumb_home: "Home",
      breadcrumb_cars: "Our Cars",
      breadcrumb_about: "About Us",

      page_cars_title: "Our full car inventory",
      page_cars_desc: "Inspected, warranty-backed cars are waiting for you to find the right one. Filter by brand, price or fuel type.",
      label_sort: "Sort by:",
      sort_newest: "Newest",
      sort_price_asc: "Price: low to high",
      sort_price_desc: "Price: high to low",
      sort_km_asc: "Lowest mileage",
      btn_reset_filters: "Clear filters",
      results_suffix: "cars shown",
      empty_pre: "No cars match your filters. Try different criteria, or ",
      empty_link: "request a personalized offer",
      load_more: "Load more cars",
      cta_cars_title: "Can't find what you're looking for?",
      cta_cars_desc: "Tell us what car you're looking for and we'll find it on the market for you.",
      cta_cars_btn: "Start a custom search",

      page_about_title: "The story of CarnovoX Motor",
      page_about_desc: "Since 2012 we've helped customers find the right car for them — transparently, reliably, with a warranty.",
      story_tag: "The beginning",
      story_title: "From a small Budapest lot to the region's most trusted used car dealer",
      story_p1: "We founded CarnovoX Motor in 2012 with the goal of changing what buying a used car feels like. Too many buyers had bad experiences with concealed faults, rolled-back odometers and high-pressure haggling.",
      story_p2: "We follow one simple principle: we inspect and price every car as if we were buying it for ourselves. That mindset helped us build a team and a customer base that still trusts us today.",
      story_p3: "Today we sell hundreds of cars a year, backed by our own inspection protocol, a financing partner network and warranty coverage — without giving up the personal, customer-first approach we started with.",
      values_tag: "Our values",
      values_title: "What we've built our business on",
      values_desc: "Four principles that guide every decision we make.",
      value1_title: "Reliability",
      value1_desc: "We do what we promise — from the service book to the delivery date.",
      value2_title: "Transparency",
      value2_desc: "Full history, real mileage, clear pricing — always.",
      value3_title: "Customer focus",
      value3_desc: "The goal isn't the sale — it's you still being happy with your car years later.",
      value4_title: "Expertise",
      value4_desc: "Every member of our team has automotive industry background and training.",
      milestones_tag: "Milestones",
      milestones_title: "Our journey over the years",
      timeline1_title: "The founding year",
      timeline1_desc: "We opened our first lot in Budapest with just 12 cars in stock.",
      timeline2_title: "Our own inspection protocol",
      timeline2_desc: "We developed our 120-point inspection system, still used on every car today.",
      timeline3_title: "Financing partner network",
      timeline3_desc: "We launched partnerships with leading banks for fast, flexible loan approval.",
      timeline4_title: "Our 1,500th car sold",
      timeline4_desc: "Today we've served thousands of happy customers, with 98% customer satisfaction.",
      team_tag: "Our team",
      team_title: "Meet the team",
      team_desc: "Experienced experts who help you find the right car for you.",
      team1_name: "Gabriel Hart",
      team1_role: "Founder & CEO",
      team2_name: "Anna Fields",
      team2_role: "Head of Sales",
      team3_name: "Nick Baker",
      team3_role: "Lead Mechanic",
      team4_name: "Dora Vance",
      team4_role: "Financing Advisor",
      badges_tag: "Why you can trust us",
      badges_title: "Our certifications and guarantees",
      badge1_title: "12-month warranty",
      badge1_sub: "On every car",
      badge2_title: "History check",
      badge2_sub: "Performed on every car",
      badge3_title: "Legal contract",
      badge3_sub: "On every sale",
      badge4_title: "Financial partners",
      badge4_sub: "With leading banks",
      cta_about_title: "Let's meet in person",
      cta_about_desc: "Visit our lot, or browse our inventory online."
    }
  };

  const LANG_KEY = "cnx-lang";
  let currentLang = localStorage.getItem(LANG_KEY) || "hu";
  if (!I18N[currentLang]) currentLang = "hu";
  let carsPageReset = null;

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || (I18N.hu[key]) || key;
  }

  function currentMarket() {
    return currentLang === "en" ? "uk" : "hu";
  }

  function applyTranslations() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      el.setAttribute("alt", t(el.getAttribute("data-i18n-alt")));
    });
    document.querySelectorAll("[data-i18n-href]").forEach((el) => {
      el.setAttribute("href", t(el.getAttribute("data-i18n-href")));
    });
    document.querySelectorAll("[data-i18n-src]").forEach((el) => {
      el.setAttribute("src", t(el.getAttribute("data-i18n-src")));
    });
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      document.title = t(el.getAttribute("data-i18n-title"));
    });
    document.querySelectorAll("[data-i18n-content]").forEach((el) => {
      el.setAttribute("content", t(el.getAttribute("data-i18n-content")));
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
    });

    refreshMarketUI();
  }

  function setLang(lang) {
    if (!I18N[lang]) return;
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    applyTranslations();
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
  });

  /* ---------------- Car inventory data ---------------- */
  const ICON_GEAR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18" stroke-linecap="round"/></svg>';
  const ICON_FUEL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3" stroke-linecap="round"/></svg>';
  const ICON_FAV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20s-7-4.4-9.5-8.8C.8 8 2 4.5 5.4 4a5 5 0 0 1 6.6 2 5 5 0 0 1 6.6-2c3.4.5 4.6 4 3.9 7.2C19.9 15.6 12 20 12 20Z" stroke-linejoin="round"/></svg>';
  const ICON_CLOSE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18" stroke-linecap="round"/></svg>';

  const BRAND_LABELS = {
    bmw: "BMW", audi: "Audi", volkswagen: "Volkswagen", mercedes: "Mercedes-Benz",
    toyota: "Toyota", skoda: "Škoda", ford: "Ford", opel: "Opel",
    "range-rover": "Range Rover", mini: "MINI", jaguar: "Jaguar"
  };

  const PRICE_BANDS = {
    hu: [
      { value: "0-5000000", label: "5 M Ft alatt" },
      { value: "5000000-10000000", label: "5–10 M Ft" },
      { value: "10000000-20000000", label: "10–20 M Ft" },
      { value: "20000000-999000000", label: "20 M Ft felett" }
    ],
    uk: [
      { value: "0-15000", label: "Under £15,000" },
      { value: "15000-25000", label: "£15,000–£25,000" },
      { value: "25000-40000", label: "£25,000–£40,000" },
      { value: "40000-999000", label: "Over £40,000" }
    ]
  };

  // Budapest lot (HU / Ft) and London office (UK / £) carry genuinely different stock —
  // two real locations, not a currency-converted mirror of the same cars.
  const CARS_DATA = [
    { id: 1, market: "hu", brand: "bmw", model: "BMW 320d Touring", img: "bmw-320d.jpg", year: 2021, km: 68000, price: 8490000, installment: 89900, fuel: "dizel", transmission: "automatic", body: "kombi", badge: "certified", featured: true,
      power: "190 LE", engineDesc: "2.0 literes turbódízel", drivetrain: "Hátsókerék-hajtás", description: "Praktikus és dinamikus kombi, ideális napi ingázásra és hosszú távú utazásokra egyaránt." },
    { id: 2, market: "hu", brand: "audi", model: "Audi A4 Avant", img: "audi-a4-avant.jpg", year: 2020, km: 74500, price: 7990000, installment: 82400, fuel: "dizel", transmission: "automatic", body: "kombi", badge: "sale", featured: true,
      power: "163 LE", engineDesc: "2.0 TDI", drivetrain: "Elsőkerék-hajtás", description: "Elegáns üzleti kombi kiváló felszereltséggel és alacsony fogyasztással." },
    { id: 3, market: "hu", brand: "volkswagen", model: "Volkswagen Passat", img: "vw-passat.jpg", year: 2019, km: 91200, price: 6290000, installment: 64900, fuel: "dizel", transmission: "manual", body: "kombi", badge: "certified", featured: true,
      power: "150 LE", engineDesc: "2.0 TDI", drivetrain: "Elsőkerék-hajtás", description: "Megbízható családi kombi, tágas csomagtérrel és gazdaságos üzemeltetéssel." },
    { id: 4, market: "hu", brand: "mercedes", model: "Mercedes-Benz C220d", img: "mercedes-c220d.jpg", year: 2022, km: 41000, price: 10490000, installment: 108900, fuel: "dizel", transmission: "automatic", body: "sedan", badge: "certified", featured: true,
      power: "194 LE", engineDesc: "2.0 literes dízel", drivetrain: "Hátsókerék-hajtás", description: "Prémium limuzin kifinomult utastérrel és fejlett vezetéstámogató rendszerekkel." },
    { id: 5, market: "hu", brand: "toyota", model: "Toyota RAV4 Hybrid", img: "toyota-rav4.jpg", year: 2023, km: 18400, price: 12990000, installment: 134900, fuel: "hibrid", transmission: "automatic", body: "suv", badge: "new", featured: true,
      power: "218 LE", engineDesc: "2.5 literes hibrid", drivetrain: "Összkerékhajtás", description: "Alacsony fogyasztású hibrid SUV, kiváló megbízhatósági mutatókkal." },
    { id: 6, market: "hu", brand: "skoda", model: "Škoda Superb Combi", img: "skoda-superb.jpg", year: 2020, km: 87000, price: 6790000, installment: 70200, fuel: "dizel", transmission: "manual", body: "kombi", badge: "certified", featured: true,
      power: "150 LE", engineDesc: "2.0 TDI", drivetrain: "Elsőkerék-hajtás", description: "Az egyik legtágasabb kombi a szegmensében, ideális nagycsaládosoknak." },
    { id: 7, market: "hu", brand: "bmw", model: "BMW X3 xDrive20d", img: "bmw-x3.jpg", year: 2021, km: 55000, price: 13990000, installment: 144900, fuel: "dizel", transmission: "automatic", body: "suv", badge: "certified", featured: false,
      power: "190 LE", engineDesc: "2.0 literes turbódízel", drivetrain: "Összkerékhajtás (xDrive)", description: "Sportos középkategóriás SUV, magabiztos vezetési élménnyel minden útviszony között." },
    { id: 8, market: "hu", brand: "audi", model: "Audi Q5", img: "audi-q5.jpg", year: 2019, km: 98000, price: 11490000, installment: 118900, fuel: "dizel", transmission: "automatic", body: "suv", badge: null, featured: false,
      power: "163 LE", engineDesc: "2.0 TDI", drivetrain: "Összkerékhajtás (quattro)", description: "Prémium SUV letisztult dizájnnal és kiváló építési minőséggel." },
    { id: 9, market: "hu", brand: "opel", model: "Opel Astra", img: "opel-astra.jpg", year: 2020, km: 76000, price: 5490000, installment: 56900, fuel: "dizel", transmission: "manual", body: "hatchback", badge: null, featured: false,
      power: "110 LE", engineDesc: "1.5 dízel", drivetrain: "Elsőkerék-hajtás", description: "Gazdaságos és karbantartható ferdehátú, tökéletes első autónak." },
    { id: 10, market: "hu", brand: "volkswagen", model: "Volkswagen ID.4", img: "vw-id4.jpg", year: 2023, km: 21000, price: 15490000, installment: 159900, fuel: "elektromos", transmission: "automatic", body: "suv", badge: "new", featured: false,
      power: "204 LE", engineDesc: "Elektromos motor, 77 kWh akkumulátor", drivetrain: "Hátsókerék-hajtás", description: "Teljesen elektromos SUV, akár 500 km hatótávval egy töltéssel." },
    { id: 16, market: "hu", brand: "audi", model: "Audi Q8", img: "audi.png", year: 2022, km: 32000, price: 24990000, installment: 258900, fuel: "dizel", transmission: "automatic", body: "suv", badge: "new", featured: true,
      power: "286–340 LE", engineDesc: "3.0 V6 TFSI (benzin) / 3.0 V6 TDI (dízel)", drivetrain: "8 fokozatú automata, quattro összkerékhajtás", description: "Prémium SUV sportos kupévonalvezetéssel. Digitális cockpit, két érintőkijelző és bőr sportülések az utastérben, Matrix LED fényszórók, 20–22 colos többküllős felnik és opcionális adaptív légrugózás kívül. Biztonsági csomag: sávtartó asszisztens, holttérfigyelő, 360°-os kamera és adaptív tempomat." },

    { id: 11, market: "uk", brand: "range-rover", model: "Range Rover Sport D350", img: "range-rover.jpeg", year: 2023, km: 14000, price: 54995, installment: 549, fuel: "dizel", transmission: "automatic", body: "suv", badge: "new", featured: true,
      power: "350 hp", engineDesc: "3.0-litre mild-hybrid diesel inline-six", drivetrain: "Permanent all-wheel drive", description: "Third-generation Range Rover Sport styling with minimalist black-and-silver detailing, slimline LED lighting and flush door handles. Available with 3.0-litre mild-hybrid diesel or petrol engines, or as a P440e/P510e plug-in hybrid, spanning 250–510 hp — paired with an 8-speed automatic gearbox and permanent all-wheel drive." },
    { id: 12, market: "uk", brand: "mini", model: "MINI Cooper S", img: "mini-cooper-s.jpg", year: 2022, km: 22000, price: 18995, installment: 189, fuel: "benzin", transmission: "manual", body: "hatchback", badge: "new", featured: true,
      power: "178 hp", engineDesc: "2.0-litre turbocharged petrol", drivetrain: "Front-wheel drive", description: "Iconic go-kart handling in a stylish, efficient hatchback — perfect for spirited city driving." },
    { id: 13, market: "uk", brand: "jaguar", model: "Jaguar XE", img: "jaguar-xe.jpg", year: 2021, km: 38000, price: 16495, installment: 164, fuel: "dizel", transmission: "automatic", body: "sedan", badge: "certified", featured: true,
      power: "163 hp", engineDesc: "2.0-litre diesel", drivetrain: "Rear-wheel drive", description: "Sharp-handling executive saloon with a premium cabin and distinctive British design language." },
    { id: 14, market: "uk", brand: "ford", model: "Ford Focus", img: "ford-focus.jpg", year: 2019, km: 54000, price: 11995, installment: 119, fuel: "benzin", transmission: "manual", body: "hatchback", badge: "sale", featured: false,
      power: "125 hp", engineDesc: "1.0-litre EcoBoost petrol", drivetrain: "Front-wheel drive", description: "Practical, efficient hatchback with sharp handling and low running costs." },
    { id: 15, market: "uk", brand: "volkswagen", model: "Volkswagen Golf", img: "vw-golf.jpg", year: 2021, km: 29000, price: 15995, installment: 159, fuel: "benzin", transmission: "manual", body: "hatchback", badge: null, featured: false,
      power: "130 hp", engineDesc: "1.5-litre TSI petrol", drivetrain: "Front-wheel drive", description: "The benchmark hatchback — refined, spacious and packed with technology." }
  ];

  function formatNum(n) {
    return new Intl.NumberFormat("hu-HU").format(n);
  }

  function formatPrice(amount, market) {
    if (market === "uk") return "£" + new Intl.NumberFormat("en-GB").format(amount);
    return new Intl.NumberFormat("hu-HU").format(amount) + " Ft";
  }

  function carCardHtml(car) {
    const badgeHtml = car.badge
      ? `<span class="car-photo-badge${car.badge !== "certified" ? " alt" : ""}">${t("badge_" + car.badge)}</span>`
      : "";
    return `
      <article class="car-card reveal in-view" data-id="${car.id}">
        <div class="car-photo">
          ${badgeHtml}
          <button class="car-photo-fav" aria-label="${t("fav_aria")}">${ICON_FAV}</button>
          <img src="assets/images/${car.img}" alt="${car.model}" loading="lazy" onerror="this.remove()">
        </div>
        <div class="car-card-body">
          <div class="car-card-top">
            <div><h3>${car.model}</h3><span class="car-year">${car.year} · ${formatNum(car.km)} km</span></div>
            <div class="car-price">${formatPrice(car.price, car.market)}<small>${t("installment_template").replace("{n}", formatPrice(car.installment, car.market))}</small></div>
          </div>
          <div class="car-specs">
            <div class="car-spec">${ICON_GEAR}${t("spec_" + car.transmission)}</div>
            <div class="car-spec">${ICON_FUEL}${t("spec_" + car.fuel)}</div>
          </div>
          <div class="car-card-foot">
            <button type="button" class="btn btn-outline btn-sm" data-details="${car.id}">${t("btn_details")}</button>
            <a href="index.html#contact" class="btn btn-dark btn-sm">${t("btn_interested")}</a>
          </div>
        </div>
      </article>`;
  }

  /* ---------------- Car details modal ---------------- */
  function ensureModal() {
    if (document.getElementById("carModalOverlay")) return;
    const overlay = document.createElement("div");
    overlay.className = "car-modal-overlay";
    overlay.id = "carModalOverlay";
    overlay.innerHTML = `
      <div class="car-modal" role="dialog" aria-modal="true">
        <button type="button" class="car-modal-close" data-modal-close aria-label="Close">${ICON_CLOSE}</button>
        <div class="car-modal-photo" id="carModalPhoto"></div>
        <div class="car-modal-body" id="carModalBody"></div>
      </div>`;
    document.body.appendChild(overlay);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) closeCarModal(); });
  }

  function openCarModal(id) {
    const car = CARS_DATA.find((c) => c.id === id);
    if (!car) return;
    ensureModal();
    const overlay = document.getElementById("carModalOverlay");
    const photoEl = document.getElementById("carModalPhoto");
    const bodyEl = document.getElementById("carModalBody");
    const badgeHtml = car.badge
      ? `<span class="car-photo-badge${car.badge !== "certified" ? " alt" : ""}">${t("badge_" + car.badge)}</span>`
      : "";

    photoEl.innerHTML = `${badgeHtml}<img src="assets/images/${car.img}" alt="${car.model}" onerror="this.remove()">`;
    bodyEl.innerHTML = `
      <h3>${car.model}</h3>
      <span class="car-year">${car.year} · ${formatNum(car.km)} km</span>
      <div class="car-modal-price">${formatPrice(car.price, car.market)}<small>${t("installment_template").replace("{n}", formatPrice(car.installment, car.market))}</small></div>
      <div class="car-modal-specs">
        <div class="car-modal-spec"><span>${t("label_engine")}</span><strong>${car.engineDesc}</strong></div>
        <div class="car-modal-spec"><span>${t("label_power")}</span><strong>${car.power}</strong></div>
        <div class="car-modal-spec"><span>${t("label_gearbox")}</span><strong>${t("spec_" + car.transmission)}</strong></div>
        <div class="car-modal-spec"><span>${t("label_drivetrain")}</span><strong>${car.drivetrain}</strong></div>
      </div>
      <p class="car-modal-desc">${car.description}</p>
      <div class="car-modal-actions">
        <a href="index.html#contact" class="btn btn-primary">${t("btn_interested")}</a>
        <a href="${t("contact_phone_href")}" class="btn btn-outline">${t("contact_phone_display")}</a>
      </div>`;

    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeCarModal() {
    const overlay = document.getElementById("carModalOverlay");
    if (overlay) overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-details]");
    if (trigger) { openCarModal(Number(trigger.getAttribute("data-details"))); return; }
    if (e.target.closest("[data-modal-close]")) closeCarModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCarModal();
  });

  /* ---------------- Featured cars (index.html) ---------------- */
  function renderFeatured() {
    const grid = document.getElementById("featuredGrid");
    if (!grid) return;
    grid.innerHTML = CARS_DATA.filter((c) => c.featured && c.market === currentMarket()).map(carCardHtml).join("");
  }

  /* ---------------- Market-aware brand / price selects & footer links ---------------- */
  function renderBrandOptions(select) {
    if (!select) return;
    const prev = select.value;
    // Brand list stays the same everywhere — only the actual inventory differs by market.
    const brands = [...new Set(CARS_DATA.map((c) => c.brand))]
      .sort((a, b) => BRAND_LABELS[a].localeCompare(BRAND_LABELS[b]));
    select.innerHTML = `<option value="">${t("opt_all_brands")}</option>` +
      brands.map((b) => `<option value="${b}">${BRAND_LABELS[b]}</option>`).join("");
    if (brands.includes(prev)) select.value = prev;
  }

  function renderPriceOptions(select) {
    if (!select) return;
    const prev = select.value;
    const bands = PRICE_BANDS[currentMarket()];
    select.innerHTML = `<option value="">${t("opt_any_price")}</option>` +
      bands.map((b) => `<option value="${b.value}">${b.label}</option>`).join("");
    if (bands.some((b) => b.value === prev)) select.value = prev;
  }

  function renderFooterBrands() {
    document.querySelectorAll(".js-footer-brands").forEach((ul) => {
      const brands = [...new Set(CARS_DATA.map((c) => c.brand))]
        .sort((a, b) => BRAND_LABELS[a].localeCompare(BRAND_LABELS[b]))
        .slice(0, 4);
      ul.innerHTML = brands.map((b) => `<li><a href="cars.html?brand=${b}">${BRAND_LABELS[b]}</a></li>`).join("");
    });
  }

  function refreshMarketUI() {
    renderBrandOptions(document.getElementById("qMarka"));
    renderPriceOptions(document.getElementById("qAr"));
    renderBrandOptions(document.getElementById("fBrand"));
    renderPriceOptions(document.getElementById("fPrice"));
    renderFooterBrands();
    renderFeatured();
    if (carsPageReset) carsPageReset();
  }

  /* ---------------- Cars listing page (cars.html) ---------------- */
  function initCarsPage() {
    const grid = document.getElementById("carsGrid");
    if (!grid) return;

    const PAGE_SIZE = 6;
    let visibleCount = PAGE_SIZE;

    const els = {
      search: document.getElementById("fSearch"),
      brand: document.getElementById("fBrand"),
      body: document.getElementById("fBody"),
      fuel: document.getElementById("fFuel"),
      price: document.getElementById("fPrice"),
      sort: document.getElementById("fSort"),
      reset: document.getElementById("fReset"),
      loadMore: document.getElementById("loadMoreBtn"),
      resultsCount: document.getElementById("resultsCount"),
      emptyState: document.getElementById("emptyState")
    };

    renderBrandOptions(els.brand);
    renderPriceOptions(els.price);

    const params = new URLSearchParams(window.location.search);
    if (params.get("brand")) els.brand.value = params.get("brand");
    if (params.get("body")) els.body.value = params.get("body");
    if (params.get("q")) els.search.value = params.get("q");
    if (params.get("price")) els.price.value = params.get("price");

    function getFiltered() {
      const q = els.search.value.trim().toLowerCase();
      const brand = els.brand.value;
      const body = els.body.value;
      const fuel = els.fuel.value;
      const priceRange = els.price.value;
      let [min, max] = priceRange ? priceRange.split("-").map(Number) : [0, Infinity];

      let list = CARS_DATA.filter((car) => {
        if (car.market !== currentMarket()) return false;
        if (brand && car.brand !== brand) return false;
        if (body && car.body !== body) return false;
        if (fuel && car.fuel !== fuel) return false;
        if (priceRange && (car.price < min || car.price > max)) return false;
        if (q && !car.model.toLowerCase().includes(q)) return false;
        return true;
      });

      switch (els.sort.value) {
        case "price-asc": list.sort((a, b) => a.price - b.price); break;
        case "price-desc": list.sort((a, b) => b.price - a.price); break;
        case "km-asc": list.sort((a, b) => a.km - b.km); break;
        default: list.sort((a, b) => b.year - a.year || b.id - a.id);
      }
      return list;
    }

    function render() {
      const filtered = getFiltered();
      const visible = filtered.slice(0, visibleCount);
      grid.innerHTML = visible.map(carCardHtml).join("");
      els.resultsCount.textContent = filtered.length;
      els.emptyState.classList.toggle("visible", filtered.length === 0);
      els.loadMore.style.display = visibleCount >= filtered.length ? "none" : "inline-flex";
    }

    function resetAndRender() {
      visibleCount = PAGE_SIZE;
      render();
    }

    function resetForMarketChange() {
      renderBrandOptions(els.brand);
      renderPriceOptions(els.price);
      els.search.value = "";
      els.body.value = "";
      els.fuel.value = "";
      els.sort.value = "newest";
      resetAndRender();
    }

    [els.search].forEach((el) => el.addEventListener("input", resetAndRender));
    [els.brand, els.body, els.fuel, els.price, els.sort].forEach((el) => el.addEventListener("change", resetAndRender));
    els.reset.addEventListener("click", () => {
      els.search.value = "";
      els.brand.value = "";
      els.body.value = "";
      els.fuel.value = "";
      els.price.value = "";
      els.sort.value = "newest";
      resetAndRender();
    });
    els.loadMore.addEventListener("click", () => {
      visibleCount += PAGE_SIZE;
      render();
    });

    carsPageReset = resetForMarketChange;
    render();
  }

  /* ---------------- Header / nav / scroll behavior ---------------- */
  function initHeader() {
    const header = document.getElementById("siteHeader");
    const navToggle = document.getElementById("navToggle");
    const mainNav = document.getElementById("mainNav");

    function onScroll() {
      if (!header) return;
      header.classList.toggle("scrolled", window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (navToggle && mainNav) {
      navToggle.addEventListener("click", () => {
        const open = mainNav.classList.toggle("open");
        navToggle.classList.toggle("open", open);
        navToggle.setAttribute("aria-expanded", String(open));
      });
      mainNav.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
          mainNav.classList.remove("open");
          navToggle.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
        });
      });
    }
  }

  /* ---------------- Reveal on scroll ---------------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || items.length === 0) {
      items.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((el) => observer.observe(el));
  }

  /* ---------------- Back to top ---------------- */
  function initBackToTop() {
    const btn = document.getElementById("backToTop");
    if (!btn) return;
    window.addEventListener("scroll", () => {
      btn.classList.toggle("visible", window.scrollY > 480);
    }, { passive: true });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------------- Contact form ---------------- */
  function initContactForm() {
    const form = document.getElementById("contactForm");
    const success = document.getElementById("formSuccess");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      success.classList.add("visible");
      form.reset();
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  /* ---------------- Footer year ---------------- */
  function initFooterYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initBackToTop();
    initContactForm();
    initFooterYear();
    initCarsPage();
    renderFeatured();
    renderBrandOptions(document.getElementById("qMarka"));
    renderPriceOptions(document.getElementById("qAr"));
    renderFooterBrands();
    applyTranslations();
    initReveal();
  });
})();
