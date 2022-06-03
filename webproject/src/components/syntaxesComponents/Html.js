const Html = () => {
  return (
    <>
      <div className="container-fluid">
        <h1> HTML Basics</h1>
          <h6 className="my-3">
            <strong>Example:</strong> This is the basic example of HTML that
            display the heading and paragraph content.
          </h6>

        <div className="card">
          <table border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td className="code">
                  <div className="container">
                    <div className="line number1 index0 alt2">
                      <code className="xml plain">&lt;!</code>
                      <code className="xml keyword">DOCTYPE</code>{" "}
                      <code className="xml plain">html&gt;</code>
                    </div>
                    <div className="line number2 index1 alt1">
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">html</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number3 index2 alt2">&nbsp;</div>
                    <div className="line number4 index3 alt1">
                      <code className="xml comments">
                        &lt;!-- Head Section content --&gt;
                      </code>
                    </div>
                    <div className="line number5 index4 alt2">
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">head</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number6 index5 alt1">&nbsp;</div>
                    <div className="line number7 index6 alt2">
                      <code className="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code className="xml comments">
                        &lt;!-- Page title --&gt;
                      </code>
                    </div>
                    <div className="line number8 index7 alt1">
                      <code className="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">title</code>
                      <code className="xml plain">&gt;Basic Web Page&lt;/</code>
                      <code className="xml keyword">title</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number9 index8 alt2">
                      <code className="xml plain">&lt;/</code>
                      <code className="xml keyword">head</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number10 index9 alt1">&nbsp;</div>
                    <div className="line number11 index10 alt2">
                      <code className="xml comments">
                        &lt;!-- Body Section content --&gt;
                      </code>
                    </div>
                    <div className="line number12 index11 alt1">
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">body</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number13 index12 alt2">&nbsp;</div>
                    <div className="line number14 index13 alt1">
                      <code className="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code className="xml comments">
                        &lt;!-- Used to display heading content --&gt;
                      </code>
                    </div>
                    <div className="line number15 index14 alt2">
                      <code className="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">h1</code>
                      <code className="xml plain">
                        &gt;Welcome to GeeksforGeeks&lt;/
                      </code>
                      <code className="xml keyword">h1</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number16 index15 alt1">&nbsp;</div>
                    <div className="line number17 index16 alt2">
                      <code className="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code className="xml comments">
                        &lt;!-- Used to display paragrapg content --&gt;
                      </code>
                    </div>
                    <div className="line number18 index17 alt1">
                      <code className="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">p</code>
                      <code className="xml plain">
                        &gt;A computer science portal for geeks&lt;/
                      </code>
                      <code className="xml keyword">p</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number19 index18 alt2">
                      <code className="xml plain">&lt;/</code>
                      <code className="xml keyword">body</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number20 index19 alt1">&nbsp;</div>
                    <div className="line number21 index20 alt2">
                      <code className="xml plain">&lt;/</code>
                      <code className="xml keyword">html</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

          <h6 className="my-3">
            <strong>Example:</strong> This example describes how to create a
            simple form using HTML. To create a form, we will use &lt;form&gt;
            tag and inside form tag, we will use some input fields and label
            elements to display the form.
          </h6>

        <div className="card">
          <table border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td className="code">
                  <div className="container">
                    <div className="line number1 index0 alt2">
                      <code className="xml plain">&lt;!</code>
                      <code className="xml keyword">DOCTYPE</code>{" "}
                      <code className="xml plain">html&gt;</code>
                    </div>
                    <div className="line number2 index1 alt1">
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">html</code>{" "}
                      <code className="xml color1">lang</code>
                      <code className="xml plain">=</code>
                      <code className="xml string">"en"</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number3 index2 alt2">&nbsp;</div>
                    <div className="line number4 index3 alt1">
                      <code className="xml comments">
                        &lt;!-- Head Section Content --&gt;
                      </code>
                    </div>
                    <div className="line number5 index4 alt2">
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">head</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number6 index5 alt1">&nbsp;</div>
                    <div className="line number7 index6 alt2">
                      <code className="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code className="xml comments">
                        &lt;!-- Page title --&gt;
                      </code>
                    </div>
                    <div className="line number8 index7 alt1">
                      <code className="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">title</code>
                      <code className="xml plain">
                        &gt;Basic form design using HTML&lt;/
                      </code>
                      <code className="xml keyword">title</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number9 index8 alt2">
                      <code className="xml plain">&lt;/</code>
                      <code className="xml keyword">head</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number10 index9 alt1">&nbsp;</div>
                    <div className="line number11 index10 alt2">
                      <code className="xml comments">
                        &lt;!-- Body Section Content --&gt;
                      </code>
                    </div>
                    <div className="line number12 index11 alt1">
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">body</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number13 index12 alt2">&nbsp;</div>
                    <div className="line number14 index13 alt1">
                      <code className="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code className="xml comments">
                        &lt;!-- Heading Content --&gt;
                      </code>
                    </div>
                    <div className="line number15 index14 alt2">
                      <code className="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">h1</code>
                      <code className="xml plain">&gt;GeeksforGeeks&lt;/</code>
                      <code className="xml keyword">h1</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number16 index15 alt1">&nbsp;</div>
                    <div className="line number17 index16 alt2">
                      <code className="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">h3</code>
                      <code className="xml plain">
                        &gt;Basic form design using HTML&lt;/
                      </code>
                      <code className="xml keyword">h3</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number18 index17 alt1">&nbsp;</div>
                    <div className="line number19 index18 alt2">
                      <code className="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code className="xml comments">
                        &lt;!-- Creating a from --&gt;
                      </code>
                    </div>
                    <div className="line number20 index19 alt1">
                      <code className="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">form</code>{" "}
                      <code className="xml color1">action</code>
                      <code className="xml plain">=</code>
                      <code className="xml string">"#"</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number21 index20 alt2">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">fieldset</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number22 index21 alt1">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">legend</code>
                      <code className="xml plain">&gt;Personal Details&lt;/</code>
                      <code className="xml keyword">legend</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number23 index22 alt2">&nbsp;</div>
                    <div className="line number24 index23 alt1">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml comments">
                        &lt;!-- Label and input field --&gt;
                      </code>
                    </div>
                    <div className="line number25 index24 alt2">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">p</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number26 index25 alt1">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">label</code>
                      <code className="xml plain">&gt;First name : &lt;</code>
                      <code className="xml keyword">input</code>{" "}
                      <code className="xml color1">name</code>
                      <code className="xml plain">=</code>
                      <code className="xml string">"firstName"</code>{" "}
                      <code className="xml plain">/&gt;&lt;/</code>
                      <code className="xml keyword">label</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number27 index26 alt2">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;/</code>
                      <code className="xml keyword">p</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number28 index27 alt1">&nbsp;</div>
                    <div className="line number29 index28 alt2">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">p</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number30 index29 alt1">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">label</code>
                      <code className="xml plain">&gt;Last name : &lt;</code>
                      <code className="xml keyword">input</code>{" "}
                      <code className="xml color1">name</code>
                      <code className="xml plain">=</code>
                      <code className="xml string">"lastName"</code>{" "}
                      <code className="xml plain">/&gt;&lt;/</code>
                      <code className="xml keyword">label</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number31 index30 alt2">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;/</code>
                      <code className="xml keyword">p</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number32 index31 alt1">&nbsp;</div>
                    <div className="line number33 index32 alt2">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml comments">
                        &lt;!-- Label and radio button field --&gt;
                      </code>
                    </div>
                    <div className="line number34 index33 alt1">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">p</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number35 index34 alt2">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">Gender :</code>
                    </div>
                    <div className="line number36 index35 alt1">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">label</code>
                      <code className="xml plain">&gt;&lt;</code>
                      <code className="xml keyword">input</code>{" "}
                      <code className="xml color1">type</code>
                      <code className="xml plain">=</code>
                      <code className="xml string">"radio"</code>{" "}
                      <code className="xml color1">name</code>
                      <code className="xml plain">=</code>
                      <code className="xml string">"gender"</code>
                    </div>
                    <div className="line number37 index36 alt2">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml color1">value</code>
                      <code className="xml plain">=</code>
                      <code className="xml string">"male"</code>{" "}
                      <code className="xml plain">/&gt; Male&lt;/</code>
                      <code className="xml keyword">label</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number38 index37 alt1">&nbsp;</div>
                    <div className="line number39 index38 alt2">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">label</code>
                      <code className="xml plain">&gt;&lt;</code>
                      <code className="xml keyword">input</code>{" "}
                      <code className="xml color1">type</code>
                      <code className="xml plain">=</code>
                      <code className="xml string">"radio"</code>{" "}
                      <code className="xml color1">name</code>
                      <code className="xml plain">=</code>
                      <code className="xml string">"gender"</code>
                    </div>
                    <div className="line number40 index39 alt1">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml color1">value</code>
                      <code className="xml plain">=</code>
                      <code className="xml string">"female"</code>{" "}
                      <code className="xml plain">/&gt; Female&lt;/</code>
                      <code className="xml keyword">label</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number41 index40 alt2">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;/</code>
                      <code className="xml keyword">p</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number42 index41 alt1">&nbsp;</div>
                    <div className="line number43 index42 alt2">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">p</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number44 index43 alt1">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">label</code>
                      <code className="xml plain">&gt;Email : &lt;</code>
                      <code className="xml keyword">input</code>{" "}
                      <code className="xml color1">type</code>
                      <code className="xml plain">=</code>
                      <code className="xml string">"email"</code>
                    </div>
                    <div className="line number45 index44 alt2">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml color1">name</code>
                      <code className="xml plain">=</code>
                      <code className="xml string">"email"</code>{" "}
                      <code className="xml plain">/&gt;&lt;/</code>
                      <code className="xml keyword">label</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number46 index45 alt1">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;/</code>
                      <code className="xml keyword">p</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number47 index46 alt2">&nbsp;</div>
                    <div className="line number48 index47 alt1">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">p</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number49 index48 alt2">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">label</code>
                      <code className="xml plain">&gt;Date of Birth : &lt;</code>
                      <code className="xml keyword">input</code>{" "}
                      <code className="xml color1">type</code>
                      <code className="xml plain">=</code>
                      <code className="xml string">"date"</code>
                    </div>
                    <div className="line number50 index49 alt1">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml color1">name</code>
                      <code className="xml plain">=</code>
                      <code className="xml string">"birthDate"</code>
                      <code className="xml plain">&gt;&lt;/</code>
                      <code className="xml keyword">label</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number51 index50 alt2">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;/</code>
                      <code className="xml keyword">p</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number52 index51 alt1">&nbsp;</div>
                    <div className="line number53 index52 alt2">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml comments">
                        &lt;!-- Label and textarea field --&gt;
                      </code>
                    </div>
                    <div className="line number54 index53 alt1">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">p</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number55 index54 alt2">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">label</code>
                      <code className="xml plain">&gt;Address :</code>
                    </div>
                    <div className="line number56 index55 alt1">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">br</code>{" "}
                      <code className="xml plain">/&gt;</code>
                    </div>
                    <div className="line number57 index56 alt2">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">textarea</code>{" "}
                      <code className="xml color1">name</code>
                      <code className="xml plain">=</code>
                      <code className="xml string">"address"</code>{" "}
                      <code className="xml color1">cols</code>
                      <code className="xml plain">=</code>
                      <code className="xml string">"30"</code>
                    </div>
                    <div className="line number58 index57 alt1">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml color1">rows</code>
                      <code className="xml plain">=</code>
                      <code className="xml string">"3"</code>
                      <code className="xml plain">&gt;&lt;/</code>
                      <code className="xml keyword">textarea</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number59 index58 alt2">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;/</code>
                      <code className="xml keyword">label</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number60 index59 alt1">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;/</code>
                      <code className="xml keyword">p</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number61 index60 alt2">&nbsp;</div>
                    <div className="line number62 index61 alt1">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml comments">
                        &lt;!-- Creating a button --&gt;
                      </code>
                    </div>
                    <div className="line number63 index62 alt2">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">p</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number64 index63 alt1">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;</code>
                      <code className="xml keyword">button</code>{" "}
                      <code className="xml color1">type</code>
                      <code className="xml plain">=</code>
                      <code className="xml string">"submit"</code>
                      <code className="xml plain">&gt;Submit&lt;/</code>
                      <code className="xml keyword">button</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number65 index64 alt2">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;/</code>
                      <code className="xml keyword">p</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number66 index65 alt1">
                      <code className="xml spaces">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </code>
                      <code className="xml plain">&lt;/</code>
                      <code className="xml keyword">fieldset</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number67 index66 alt2">
                      <code className="xml spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code>
                      <code className="xml plain">&lt;/</code>
                      <code className="xml keyword">form</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number68 index67 alt1">
                      <code className="xml plain">&lt;/</code>
                      <code className="xml keyword">body</code>
                      <code className="xml plain">&gt;</code>
                    </div>
                    <div className="line number69 index68 alt2">&nbsp;</div>
                    <div className="line number70 index69 alt1">
                      <code className="xml plain">&lt;/</code>
                      <code className="xml keyword">html</code>
                      <code className="xml plain">&gt;</code>
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
