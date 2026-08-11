document.body.insertAdjacentHTML(
  "afterbegin",
  `
    <header class="site-header" id="top">
      <a class="brand" href="../index.html" aria-label="TapioBridge home">
        <img src="../assets/images/tapiobridge-logo-256.png" alt="" class="brand-logo" width="256" height="256">
        <span>TapioBridge</span>
      </a>
      <button class="nav-toggle" type="button" aria-label="Open navigation" aria-expanded="false">
        <span></span><span></span>
      </button>
      <nav class="nav-links" aria-label="Primary navigation">
        <a href="../index.html#focus">Focus</a>
        <div class="nav-products open-page">
          <button class="products-toggle" type="button" aria-expanded="false" aria-controls="products-menu">
            Products <span aria-hidden="true"></span>
          </button>
          <div class="products-menu" id="products-menu">
            <a href="../products.html#yardi"><small>Yardi</small><strong>Connector for Outlook</strong></a>
            <a href="../products.html#espocrm"><small>EspoCRM</small><strong>Signature Manager</strong></a>
          </div>
        </div>
        <a href="../index.html#process">Process</a>
        <a href="../index.html#about">About</a>
        <a href="../index.html#contact">Contact</a>
      </nav>
      <a class="header-link" href="../index.html#contact">Start a Conversation</a>
    </header>

    <main class="oss-detail">
      <a class="oss-back-link" href="../products.html#open-source-title"><span aria-hidden="true">&#8592;</span> All products</a>

      <section class="oss-detail-hero" aria-labelledby="product-title">
        <div>
          <p class="oss-detail-kicker">
            <span data-product-platform></span>
            <span data-product-category></span>
            <span class="oss-status">Open source</span>
          </p>
          <h1 id="product-title" data-product-title></h1>
          <p class="oss-detail-lead" data-product-lead></p>
        </div>
      </section>

      <div class="oss-detail-body">
        <nav class="oss-toc" aria-label="On this page">
          <p>On this page</p>
          <a href="#what-it-does">What it does</a>
          <a href="#requirements">Requirements</a>
          <a href="#installation">Download and install</a>
          <a href="#usage">How to use it</a>
        </nav>

        <div class="oss-guide-content">
          <section class="oss-guide-section" id="what-it-does">
            <h2>What it does</h2>
            <p data-product-description></p>
            <ul data-product-features></ul>
          </section>

          <section class="oss-guide-section" id="requirements">
            <h2>Requirements</h2>
            <ul data-product-requirements></ul>
          </section>

          <section class="oss-guide-section" id="installation">
            <h2>Download and install</h2>
            <p data-product-install-intro></p>
            <ol data-product-install-steps></ol>
            <pre class="oss-command" data-product-command></pre>
          </section>

          <section class="oss-guide-section" id="usage">
            <h2>How to use it</h2>
            <ol data-product-usage></ol>
            <p class="oss-note" data-product-note></p>
          </section>

          <aside class="oss-final-panel">
            <div><h2>Project source and downloads</h2><p>Use the original repository for releases, current documentation and issue reporting.</p></div>
            <a class="oss-final-link" data-product-source-bottom target="_blank" rel="noopener noreferrer">View on GitHub <span aria-hidden="true">&#8599;</span></a>
          </aside>
        </div>
      </div>
    </main>

    <footer class="site-footer">
      <div>
        <a class="brand footer-brand" href="../index.html" aria-label="TapioBridge home">
          <img src="../assets/images/tapiobridge-logo-256.png" alt="" class="brand-logo" width="256" height="256">
          <span>TapioBridge</span>
        </a>
        <p>Focused software for workflow information and functionality.</p>
      </div>
      <nav class="footer-nav" aria-label="Footer navigation">
        <a href="../index.html#focus">Focus</a>
        <a href="../products.html">Products</a>
        <a href="../index.html#process">Process</a>
        <a href="../index.html#about">About</a>
        <a href="../index.html#contact">Contact</a>
      </nav>
      <p class="copyright">&copy; 2026 TapioBridge. All rights reserved.</p>
    </footer>
  `
);
