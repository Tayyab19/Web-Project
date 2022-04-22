const CSS = () => {
  return (
    <>
      <div class="container-fluid">
        <h1> CSS Basics</h1>

        <p>
          <h6>
            <strong>Inline Styling:</strong>
          </h6>
        </p>
        <card bg-light>
          <pre>&lt;h1 style="color: green;"&gt;StackOverFlow&lt;/h1&gt;</pre>
        </card>

        <p>
          <h6>
            <strong>Styling using Classes</strong>
          </h6>
          <card bg-light>
            <pre>
              <code class="hljs xml">
                <span class="hljs-symbol">&lt;</span>p class="smallcaps"
                <span class="hljs-symbol">&gt;</span>Your paragraph here.
                <span class="hljs-symbol">&lt;</span>/p
                <span class="hljs-symbol">&gt;</span>
              </code>
            </pre>
          </card>
        </p>
      </div>
    </>
  );
};

export default CSS;
