<?php get_header(); $theme = get_template_directory_uri(); ?>
<div id="top"></div>
<?php if ( isset( $_GET['enquiry'] ) && in_array( sanitize_key( $_GET['enquiry'] ), array( 'success', 'error' ), true ) ) : $enquiry_status = sanitize_key( $_GET['enquiry'] ); ?>
  <div id="enquiry-toast" class="toast <?php echo 'error' === $enquiry_status ? 'error' : ''; ?>" role="status" aria-live="polite">
    <?php echo 'success' === $enquiry_status ? esc_html__( 'Message sent successfully. Our team will contact you shortly.', 'divyashakti-associates' ) : esc_html__( 'Message could not be sent. Please call us directly or try again.', 'divyashakti-associates' ); ?>
  </div>
<?php endif; ?>
<main>
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <div class="eyebrow"><span class="status-dot"></span> 39+ Years of Excellence</div>
        <h1>Divyashakti Associates Pvt. Ltd.</h1>
        <p class="hero-subtitle">Building Trust Since 1985</p>
        <p class="hero-copy">A legacy of structural integrity and professional consultancy in construction, renovation, and government contracting. We are the bedrock of your ambitious projects.</p>
        <div class="button-row"><a class="button button-primary" href="#contact">Enquire Now</a><a class="button button-outline" href="#services">Explore Services</a></div>
      </div>
      <div class="hero-visual"><img src="<?php echo esc_url( $theme . '/assets/images/hero.jpg' ); ?>" alt="Divyashakti Associates construction work"><div class="stat-card"><strong>1985</strong><span>Established legacy</span></div></div>
    </div>
  </section>

  <section class="section director" id="director">
    <div class="container director-inner">
      <div class="director-copy"><div class="eyebrow">Director's Message</div><h2>Built on responsibility and trust.</h2><p class="quote">“Leadership is not about authority, it is about responsibility — to build with integrity, vision, and long-term trust.”</p><p>Our journey since 1985 has been defined by our commitment to delivering excellence in every brick laid and every contract fulfilled. We believe in building more than just structures; we build relationships.</p></div>
      <div class="director-photo"><img src="<?php echo esc_url( $theme . '/assets/images/director.jpg' ); ?>" alt="Amardeep Singh with former President of India Shri Ram Nath Kovind"><small>Mr. Amardeep Singh with Former President of India, Shri Ram Nath Kovind</small></div>
    </div>
  </section>

  <section class="section" id="about">
    <div class="container"><div class="section-heading"><div class="eyebrow">Our Foundation</div><h2>About Divyashakti Associates</h2><p>Decades of consistent performance, transparent partnerships, and dependable project execution.</p></div>
      <div class="cards-3">
        <article class="card"><div class="icon-box">◷</div><h3>Established Legacy</h3><p>Founded in 1985, Divyashakti Associates Pvt. Ltd. has built a strong reputation in construction and infrastructure development through decades of consistent performance and trust.</p></article>
        <article class="card"><div class="icon-box">✓</div><h3>Execution Excellence</h3><p>We specialize in civil construction, renovation, infrastructure works, and government contracting, delivering projects with a strong focus on quality, safety, and timely completion.</p></article>
        <article class="card"><div class="icon-box">↗</div><h3>Trusted Partnerships</h3><p>Our long-standing relationships with government bodies, consultants, and private stakeholders reflect our commitment to transparency, compliance, and long-term collaboration.</p></article>
      </div>
    </div>
  </section>

  <section class="section section-ice" id="services">
    <div class="container"><div class="heading-left"><div class="eyebrow">Our Expertise</div><h2>Comprehensive Infrastructure Solutions</h2><p class="hero-copy">From foundational groundworks to high-tech software enablement, we provide end-to-end consultancy and execution services.</p></div>
      <div class="services-grid">
        <article class="service-card large"><div class="service-icon">⌂</div><h3>Civil &amp; Infrastructure Construction</h3><p>Execution of government, commercial, and residential construction projects including structural works, roads, and site development, delivered with strict quality and safety standards.</p></article>
        <article class="service-card featured"><div class="service-icon">⌂</div><h3>Renovation &amp; Redevelopment</h3><p>End-to-end renovation and repair services for residential, commercial, and institutional buildings, covering both interior and exterior upgrades.</p></article>
        <article class="service-card"><div class="service-icon">▤</div><h3>Government Projects &amp; Tenders</h3><p>Handling of government tenders including documentation, compliance, execution, and coordination with public sector authorities.</p></article>
        <article class="service-card"><div class="service-icon">▦</div><h3>Material Procurement &amp; Supply</h3><p>Reliable sourcing and supply of high-quality construction materials for medium to large-scale infrastructure projects.</p></article>
        <article class="service-card"><div class="service-icon">⌖</div><h3>Land Acquisition &amp; Project Coordination</h3><p>Support in land acquisition processes, feasibility analysis, regulatory approvals, and coordination with local authorities for smooth project initiation.</p></article>
        <div class="tech-bar"><div class="icon-box">⌘</div><div><h3>Technology &amp; Software Enablement</h3><p>Strategic investment in modern software tools for project planning, cost estimation, documentation, and internal process optimization to enhance efficiency and transparency.</p></div></div>
      </div>
    </div>
  </section>

  <section class="section credentials" id="credentials"><div class="container"><div class="section-heading"><h2>Our Credentials</h2><p>A legacy built on trust, compliance, and consistent delivery across four decades.</p></div><div class="credential-grid">
    <div class="credential"><span>✓</span>Registered Government Contractor</div><div class="credential"><span>✓</span>39+ Years of Industry Experience</div><div class="credential"><span>✓</span>250+ Successfully Completed Civil &amp; Renovation Projects</div><div class="credential"><span>✓</span>ISO &amp; MSME Registered Organization</div><div class="credential"><span>✓</span>Verified PAN, GST &amp; Company CIN</div><div class="credential"><span>✓</span>A Grade Statutory Compliance</div>
  </div></div></section>

  <section class="section" id="contact"><div class="container contact-grid"><div><div class="eyebrow">Get In Touch</div><h2>Contact Our Experts</h2><p class="contact-intro">Have a project or enquiry? Share your details and our team will get back to you promptly to discuss your requirements.</p>
    <div class="contact-detail"><div class="icon-box">⌖</div><div><strong>Office Address</strong><span>8-A, Pocket-D, Deep Enclave,<br>Ashok Vihar Phase-III, Delhi-110052</span></div></div>
    <div class="contact-detail"><div class="icon-box">@</div><div><strong>Email Us</strong><span>divya.shakti0@gmail.com</span></div></div>
    <div class="contact-detail"><div class="icon-box">☎</div><div><strong>Call Us</strong><span>011-43024533</span></div></div>
  </div><div class="form-card">
    <?php if ( isset( $_GET['enquiry'] ) ) : ?><div class="notice"><?php echo 'success' === sanitize_key( $_GET['enquiry'] ) ? esc_html__( 'Enquiry received. Our team will contact you shortly.', 'divyashakti-associates' ) : esc_html__( 'Something went wrong. Please try again or call us directly.', 'divyashakti-associates' ); ?></div><?php endif; ?>
    <form action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="post"><input type="hidden" name="action" value="divyashakti_enquiry"><?php wp_nonce_field( 'divyashakti_enquiry', 'divyashakti_nonce' ); ?>
      <div class="form-grid"><div class="field"><label for="name">Full Name *</label><input id="name" name="name" type="text" required placeholder="Enter your full name"></div><div class="field"><label for="phone">Phone Number *</label><input id="phone" name="phone" type="tel" required placeholder="+91 XXXX XXXX XX"></div><div class="field"><label for="email">Email Address *</label><input id="email" name="email" type="email" required placeholder="name@example.com"></div><div class="field"><label for="service">Query Regarding *</label><select id="service" name="service" required><option value="" selected disabled>Select an option</option><option value="civil-construction">Civil Construction</option><option value="renovation-repair">Renovation / Repair</option><option value="government-tenders">Government Tenders</option><option value="material-supply">Material Supply</option><option value="land-acquisition">Land Acquisition / Development</option><option value="technology-software">Technology / Software</option><option value="other">Other</option></select></div><div class="field full"><label for="message">Your Message *</label><textarea id="message" name="message" required placeholder="Describe your project requirements..."></textarea></div></div><button class="button button-primary" type="submit">Enquire Now</button>
    </form>
  </div></div></section>
</main>
<?php get_footer(); ?>
