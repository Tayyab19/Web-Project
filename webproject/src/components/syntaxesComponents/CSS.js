const CSS = () => {
  return (
    <>
      <div className="container-fluid">
        <h1> CSS Basics</h1>

          <h6>
            <strong>Inline Styling:</strong>
          </h6>
  
        <card bg-light>
          <pre>&lt;h1 style="color: green;"&gt;StackOverFlow&lt;/h1&gt;</pre>
        </card>
          <h6>
            <strong>Styling using Classes</strong>
          </h6>
          <card bg-light>
            <pre>
              <code className="hljs xml">
                <span className="hljs-symbol">&lt;</span>p className="smallcaps"
                <span className="hljs-symbol">&gt;</span>Your paragraph here.
                <span className="hljs-symbol">&lt;</span>/p
                <span className="hljs-symbol">&gt;</span>
              </code>
            </pre>
          </card>

      </div>
    </>
  );
};

export default CSS;
