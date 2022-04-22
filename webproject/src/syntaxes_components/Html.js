const Html = () => {
  return (
    <>
      <div class="container-fluid">
        <h1> HTML Basics</h1>
        <p>
          <h6 className="my-3">
            <strong>Example:</strong> This is the basic example of HTML that
            display the heading and paragraph content.
          </h6>
        </p>
        <div className="card">
          <table border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr>
                <td class="code">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="xml plain">&lt;!</code>
                      <code class="xml keyword">DOCTYPE</code>{" "}
                      <code class="xml plain">html&gt;</code>
                    </div>
                    <div class="line number2 index1 alt1">
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">html</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number3 index2 alt2">&nbsp;</div>
                    <div class="line number4 index3 alt1">
                      <code class="xml comments">
                        &lt;!-- Head Section content --&gt;
                      </code>
                    </div>
                    <div class="line number5 index4 alt2">
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">head</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number6 index5 alt1">&nbsp;</div>
                    <div class="line number7 index6 alt2">
                      <code class="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code class="xml comments">
                        &lt;!-- Page title --&gt;
                      </code>
                    </div>
                    <div class="line number8 index7 alt1">
                      <code class="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">title</code>
                      <code class="xml plain">&gt;Basic Web Page&lt;/</code>
                      <code class="xml keyword">title</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number9 index8 alt2">
                      <code class="xml plain">&lt;/</code>
                      <code class="xml keyword">head</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number10 index9 alt1">&nbsp;</div>
                    <div class="line number11 index10 alt2">
                      <code class="xml comments">
                        &lt;!-- Body Section content --&gt;
                      </code>
                    </div>
                    <div class="line number12 index11 alt1">
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">body</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number13 index12 alt2">&nbsp;</div>
                    <div class="line number14 index13 alt1">
                      <code class="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code class="xml comments">
                        &lt;!-- Used to display heading content --&gt;
                      </code>
                    </div>
                    <div class="line number15 index14 alt2">
                      <code class="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">h1</code>
                      <code class="xml plain">
                        &gt;Welcome to GeeksforGeeks&lt;/
                      </code>
                      <code class="xml keyword">h1</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number16 index15 alt1">&nbsp;</div>
                    <div class="line number17 index16 alt2">
                      <code class="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code class="xml comments">
                        &lt;!-- Used to display paragrapg content --&gt;
                      </code>
                    </div>
                    <div class="line number18 index17 alt1">
                      <code class="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">p</code>
                      <code class="xml plain">
                        &gt;A computer science portal for geeks&lt;/
                      </code>
                      <code class="xml keyword">p</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number19 index18 alt2">
                      <code class="xml plain">&lt;/</code>
                      <code class="xml keyword">body</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number20 index19 alt1">&nbsp;</div>
                    <div class="line number21 index20 alt2">
                      <code class="xml plain">&lt;/</code>
                      <code class="xml keyword">html</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <h6 className="my-3">
            <strong>Example:</strong> This example describes how to create a
            simple form using HTML. To create a form, we will use &lt;form&gt;
            tag and inside form tag, we will use some input fields and label
            elements to display the form.
          </h6>
        </p>

        <div className="card">
          <table border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr>
                <td class="code">
                  <div class="container">
                    <div class="line number1 index0 alt2">
                      <code class="xml plain">&lt;!</code>
                      <code class="xml keyword">DOCTYPE</code>{" "}
                      <code class="xml plain">html&gt;</code>
                    </div>
                    <div class="line number2 index1 alt1">
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">html</code>{" "}
                      <code class="xml color1">lang</code>
                      <code class="xml plain">=</code>
                      <code class="xml string">"en"</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number3 index2 alt2">&nbsp;</div>
                    <div class="line number4 index3 alt1">
                      <code class="xml comments">
                        &lt;!-- Head Section Content --&gt;
                      </code>
                    </div>
                    <div class="line number5 index4 alt2">
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">head</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number6 index5 alt1">&nbsp;</div>
                    <div class="line number7 index6 alt2">
                      <code class="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code class="xml comments">
                        &lt;!-- Page title --&gt;
                      </code>
                    </div>
                    <div class="line number8 index7 alt1">
                      <code class="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">title</code>
                      <code class="xml plain">
                        &gt;Basic form design using HTML&lt;/
                      </code>
                      <code class="xml keyword">title</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number9 index8 alt2">
                      <code class="xml plain">&lt;/</code>
                      <code class="xml keyword">head</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number10 index9 alt1">&nbsp;</div>
                    <div class="line number11 index10 alt2">
                      <code class="xml comments">
                        &lt;!-- Body Section Content --&gt;
                      </code>
                    </div>
                    <div class="line number12 index11 alt1">
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">body</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number13 index12 alt2">&nbsp;</div>
                    <div class="line number14 index13 alt1">
                      <code class="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code class="xml comments">
                        &lt;!-- Heading Content --&gt;
                      </code>
                    </div>
                    <div class="line number15 index14 alt2">
                      <code class="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">h1</code>
                      <code class="xml plain">&gt;GeeksforGeeks&lt;/</code>
                      <code class="xml keyword">h1</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number16 index15 alt1">&nbsp;</div>
                    <div class="line number17 index16 alt2">
                      <code class="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">h3</code>
                      <code class="xml plain">
                        &gt;Basic form design using HTML&lt;/
                      </code>
                      <code class="xml keyword">h3</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number18 index17 alt1">&nbsp;</div>
                    <div class="line number19 index18 alt2">
                      <code class="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code class="xml comments">
                        &lt;!-- Creating a from --&gt;
                      </code>
                    </div>
                    <div class="line number20 index19 alt1">
                      <code class="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">form</code>{" "}
                      <code class="xml color1">action</code>
                      <code class="xml plain">=</code>
                      <code class="xml string">"#"</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number21 index20 alt2">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">fieldset</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number22 index21 alt1">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">legend</code>
                      <code class="xml plain">&gt;Personal Details&lt;/</code>
                      <code class="xml keyword">legend</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number23 index22 alt2">&nbsp;</div>
                    <div class="line number24 index23 alt1">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml comments">
                        &lt;!-- Label and input field --&gt;
                      </code>
                    </div>
                    <div class="line number25 index24 alt2">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">p</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number26 index25 alt1">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">label</code>
                      <code class="xml plain">&gt;First name : &lt;</code>
                      <code class="xml keyword">input</code>{" "}
                      <code class="xml color1">name</code>
                      <code class="xml plain">=</code>
                      <code class="xml string">"firstName"</code>{" "}
                      <code class="xml plain">/&gt;&lt;/</code>
                      <code class="xml keyword">label</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number27 index26 alt2">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;/</code>
                      <code class="xml keyword">p</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number28 index27 alt1">&nbsp;</div>
                    <div class="line number29 index28 alt2">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">p</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number30 index29 alt1">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">label</code>
                      <code class="xml plain">&gt;Last name : &lt;</code>
                      <code class="xml keyword">input</code>{" "}
                      <code class="xml color1">name</code>
                      <code class="xml plain">=</code>
                      <code class="xml string">"lastName"</code>{" "}
                      <code class="xml plain">/&gt;&lt;/</code>
                      <code class="xml keyword">label</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number31 index30 alt2">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;/</code>
                      <code class="xml keyword">p</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number32 index31 alt1">&nbsp;</div>
                    <div class="line number33 index32 alt2">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml comments">
                        &lt;!-- Label and radio button field --&gt;
                      </code>
                    </div>
                    <div class="line number34 index33 alt1">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">p</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number35 index34 alt2">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">Gender :</code>
                    </div>
                    <div class="line number36 index35 alt1">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">label</code>
                      <code class="xml plain">&gt;&lt;</code>
                      <code class="xml keyword">input</code>{" "}
                      <code class="xml color1">type</code>
                      <code class="xml plain">=</code>
                      <code class="xml string">"radio"</code>{" "}
                      <code class="xml color1">name</code>
                      <code class="xml plain">=</code>
                      <code class="xml string">"gender"</code>
                    </div>
                    <div class="line number37 index36 alt2">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml color1">value</code>
                      <code class="xml plain">=</code>
                      <code class="xml string">"male"</code>{" "}
                      <code class="xml plain">/&gt; Male&lt;/</code>
                      <code class="xml keyword">label</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number38 index37 alt1">&nbsp;</div>
                    <div class="line number39 index38 alt2">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">label</code>
                      <code class="xml plain">&gt;&lt;</code>
                      <code class="xml keyword">input</code>{" "}
                      <code class="xml color1">type</code>
                      <code class="xml plain">=</code>
                      <code class="xml string">"radio"</code>{" "}
                      <code class="xml color1">name</code>
                      <code class="xml plain">=</code>
                      <code class="xml string">"gender"</code>
                    </div>
                    <div class="line number40 index39 alt1">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml color1">value</code>
                      <code class="xml plain">=</code>
                      <code class="xml string">"female"</code>{" "}
                      <code class="xml plain">/&gt; Female&lt;/</code>
                      <code class="xml keyword">label</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number41 index40 alt2">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;/</code>
                      <code class="xml keyword">p</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number42 index41 alt1">&nbsp;</div>
                    <div class="line number43 index42 alt2">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">p</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number44 index43 alt1">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">label</code>
                      <code class="xml plain">&gt;Email : &lt;</code>
                      <code class="xml keyword">input</code>{" "}
                      <code class="xml color1">type</code>
                      <code class="xml plain">=</code>
                      <code class="xml string">"email"</code>
                    </div>
                    <div class="line number45 index44 alt2">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml color1">name</code>
                      <code class="xml plain">=</code>
                      <code class="xml string">"email"</code>{" "}
                      <code class="xml plain">/&gt;&lt;/</code>
                      <code class="xml keyword">label</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number46 index45 alt1">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;/</code>
                      <code class="xml keyword">p</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number47 index46 alt2">&nbsp;</div>
                    <div class="line number48 index47 alt1">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">p</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number49 index48 alt2">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">label</code>
                      <code class="xml plain">&gt;Date of Birth : &lt;</code>
                      <code class="xml keyword">input</code>{" "}
                      <code class="xml color1">type</code>
                      <code class="xml plain">=</code>
                      <code class="xml string">"date"</code>
                    </div>
                    <div class="line number50 index49 alt1">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml color1">name</code>
                      <code class="xml plain">=</code>
                      <code class="xml string">"birthDate"</code>
                      <code class="xml plain">&gt;&lt;/</code>
                      <code class="xml keyword">label</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number51 index50 alt2">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;/</code>
                      <code class="xml keyword">p</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number52 index51 alt1">&nbsp;</div>
                    <div class="line number53 index52 alt2">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml comments">
                        &lt;!-- Label and textarea field --&gt;
                      </code>
                    </div>
                    <div class="line number54 index53 alt1">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">p</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number55 index54 alt2">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">label</code>
                      <code class="xml plain">&gt;Address :</code>
                    </div>
                    <div class="line number56 index55 alt1">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">br</code>{" "}
                      <code class="xml plain">/&gt;</code>
                    </div>
                    <div class="line number57 index56 alt2">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">textarea</code>{" "}
                      <code class="xml color1">name</code>
                      <code class="xml plain">=</code>
                      <code class="xml string">"address"</code>{" "}
                      <code class="xml color1">cols</code>
                      <code class="xml plain">=</code>
                      <code class="xml string">"30"</code>
                    </div>
                    <div class="line number58 index57 alt1">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml color1">rows</code>
                      <code class="xml plain">=</code>
                      <code class="xml string">"3"</code>
                      <code class="xml plain">&gt;&lt;/</code>
                      <code class="xml keyword">textarea</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number59 index58 alt2">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;/</code>
                      <code class="xml keyword">label</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number60 index59 alt1">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;/</code>
                      <code class="xml keyword">p</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number61 index60 alt2">&nbsp;</div>
                    <div class="line number62 index61 alt1">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml comments">
                        &lt;!-- Creating a button --&gt;
                      </code>
                    </div>
                    <div class="line number63 index62 alt2">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">p</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number64 index63 alt1">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;</code>
                      <code class="xml keyword">button</code>{" "}
                      <code class="xml color1">type</code>
                      <code class="xml plain">=</code>
                      <code class="xml string">"submit"</code>
                      <code class="xml plain">&gt;Submit&lt;/</code>
                      <code class="xml keyword">button</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number65 index64 alt2">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;/</code>
                      <code class="xml keyword">p</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number66 index65 alt1">
                      <code class="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code class="xml plain">&lt;/</code>
                      <code class="xml keyword">fieldset</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number67 index66 alt2">
                      <code class="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code class="xml plain">&lt;/</code>
                      <code class="xml keyword">form</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number68 index67 alt1">
                      <code class="xml plain">&lt;/</code>
                      <code class="xml keyword">body</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                    <div class="line number69 index68 alt2">&nbsp;</div>
                    <div class="line number70 index69 alt1">
                      <code class="xml plain">&lt;/</code>
                      <code class="xml keyword">html</code>
                      <code class="xml plain">&gt;</code>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Html;
