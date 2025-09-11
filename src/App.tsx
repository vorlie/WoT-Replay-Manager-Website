import { useState } from "react";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [imageDescription, setImageDescription] = useState("");

  const openModal = (imageSrc: string, description: string) => {
    setCurrentImage(imageSrc);
    setImageDescription(description);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage("");
    setImageDescription("");
  };

  return (
    <div className="app">
      <main className="container">
        <div className="layout">
          <section className="content">
            <h1 className="title" id="home">WoT Replay Manager</h1>
            <p className="paragraph">
              WoT Replay Manager is a modern desktop application built with <strong>C++/Qt6</strong> and a <strong>Rust replay parser</strong> for managing World of Tanks replay files. It provides an intuitive interface for organizing and launching your replays.
            </p>
            <ul className="list">
              <li>
                <strong>Cross-Platform:</strong> Native support for both Windows and Linux.
              </li>
              <li>
                <strong>Smart Replay Management:</strong>
                <ul>
                  <li>Lists all .wotreplay files from your chosen directory</li>
                  <li>Shows detailed information: player name, tank, map, date, damage dealt</li>
                  <li>Displays server and client version compatibility</li>
                </ul>
              </li>
              <li>
                <strong>Powerful Organization:</strong>
                <ul>
                  <li>Sort replays by date, player name, tank, map, or damage</li>
                  <li>Filter and search functionality</li>
                </ul>
              </li>
              <li>
                <strong>Seamless Integration:</strong>
                <ul>
                  <li>Launch replays directly using your WoT installation</li>
                  <li>Persistent settings for paths and preferences</li>
                </ul>
              </li>
            </ul>
            <div className="button-group">
              <a
                href="https://github.com/vorlie/WoT-Replay-Manager/releases/latest"
                download
                className="download-button"
              >
                Download
              </a>
            </div>
            <hr className="divider" />

            {/* Prerequisites Section */}
            <h2 className="subtitle" id="prerequisites">Prerequisites</h2>
            
            <h3 className="subsection" id="linux-prerequisites">Linux</h3>
            <ul className="list">
              <li>
                <strong>Qt6 libraries</strong><br />
                Ensure Qt6 is installed. For a fully standalone binary, you can build static Qt6.
              </li>
              <li>
                <strong>Rust toolchain</strong><br />
                Required to build the parser library if you want to rebuild from source. Install via:
                <pre>
                  <code>
                    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
                  </code>
                </pre>
              </li>
            </ul>

            <h3 className="subsection" id="windows-prerequisites">Windows</h3>
            <ul className="list">
              <li>
                <strong>Qt6</strong> (MSVC or MinGW, matching the compiler used for the project).
              </li>
              <li>
                <strong>Rust toolchain</strong> – Required to build the parser library if you want to rebuild from source.
              </li>
            </ul>

            <hr className="divider" />

            {/* Building the Application Section */}
            <h2 className="subtitle" id="building-app">Building the Application</h2>

            <h3 className="subsection" id="building-linux">Linux</h3>
            <p className="paragraph">
              You have two options to build the project:
            </p>

            <h4 className="subsection">1. Using the Terminal (CMake + Make):</h4>
            <pre>
              <code>
                git clone &lt;repo-url&gt;
                cd WoT-Replay-Manager
                mkdir build && cd build
                cmake ..
                make -j$(nproc)
              </code>
            </pre>
            <p className="paragraph">
              The compiled binary will be located in <code>build/WoT-Replay-Manager</code>.
            </p>

            <h4 className="subsection">2. Using Qt Creator (recommended):</h4>
            <ul className="list">
              <li>Open <strong>Qt Creator</strong>.</li>
              <li>Click <strong>File → Open File or Project</strong> and select <code className="code">CMakeLists.txt</code> in the project root.</li>
              <li>Configure the kit (choose your Qt6 version and compiler).</li>
              <li>Click the <strong>Build</strong> button to compile the project.</li>
              <li>The resulting binary will appear in the build folder defined by Qt Creator (usually inside <code className="code">build-...</code>).</li>
            </ul>

            <h3 className="subsection" id="building-windows">Windows</h3>
            <ul className="list">
              <li>Copy the source files to your Windows machine.</li>
              <li>Open the project in <strong>Qt Creator</strong>, configure, and build.</li>
              <li>
                Use <code className="code">windeployqt</code> to bundle the required Qt DLLs:
                <pre>
                  <code>
                    C:\Qt\6.x.x\mingw_64\bin\windeployqt.exe path\to\WoT-Replay-Manager.exe
                  </code>
                </pre>
              </li>
            </ul>

            <hr className="divider" />

            {/* Building the Python Parser Section */}
            <h2 className="subtitle" id="building-parser">Building the Rust Parser Library</h2>
            <p className="paragraph">
              The Rust parser library is used via FFI by the C++/Qt application.
            </p>

            <h3 className="subsection" id="parser-linux">Linux</h3>
            <pre>
              <code>
                cd wot_parser_lib
                cargo build --release
                cp target/release/libwot_parser_lib.so ../WoT-Replay-Manager/lib/
              </code>
            </pre>

            <h3 className="subsection" id="parser-windows">Windows</h3>
            <pre>
              <code>
                cd wot_parser_lib
                cargo build --release
                copy target\release\wot_parser_lib.dll ..\WoT-Replay-Manager\
              </code>
            </pre>
            <p className="paragraph">
              After this, the C++ app can call the parser functions directly via FFI.
            </p>
            <hr className="divider" />
            
            {/* Running the Application Section */}
            <h2 className="subtitle" id="running-app">Running the Application</h2>
            <ul className="list">
              <li>
                <strong>Linux</strong>: Ensure <code className="code">libwot_parser_lib.so</code> is present in <code className="code">lib/</code> and run via <code className="code">run.sh</code>, which sets <code className="code">LD_LIBRARY_PATH</code> and <code className="code">QT_PLUGIN_PATH</code>.
              </li>
              <li>
                <strong>Windows</strong>: Ensure <code className="code">wot_parser_lib.dll</code> is present <strong>next to the executable</strong> and run <code className="code">WoT-Replay-Manager.exe</code>.
              </li>
            </ul>

            <h2 className="subtitle">Notes</h2>
            <ul className="list">
              <li>All replay parsing is done inside the Rust library.</li>
              <li>The C++/Qt app only handles UI, settings, and launching the game.</li>
              <li>Keep the Rust library alongside the executable to avoid runtime errors.</li>
              <li>The application supports <code className="code">.wotreplay</code> files only.</li>
            </ul>

            <h2 className="subtitle">Release Structure</h2>
            <h3 className="subsection">Windows Release Structure</h3>
            <pre><code>{`WoT-Replay-Manager/
├── WoT-Replay-Manager.exe
├── wot_parser_lib.dll
├── Qt DLLs (Qt6Core.dll, Qt6Gui.dll, etc.)
├── Support DLLs (libgcc, libstdc++, etc.)
├── generic/
│   └── qtuiotouchplugin.dll
├── iconengines/
│   └── qsvgicon.dll
├── imageformats/
│   └── qgif.dll, qico.dll, qjpeg.dll, qsvg.dll
├── networkinformation/
├── platforms/
│   └── qwindows.dll
├── styles/
├── tls/
└── translations/`}</code></pre>

            <h3 className="subsection">Linux Release Structure</h3>
            <pre><code>{`WoT-Replay-Manager/
├── bin
│   └── WoT-Replay-Manager*
├── icon.png
├── lib
│   ├── libwot_parser_lib.so*
│   ├── libQt6Core.so.6*
│   ├── libQt6Gui.so.6*
│   ├── libQt6Widgets.so.6*
│   └── ... (other Qt and system libraries)
├── plugins
│   └── platforms
│       ├── libqwayland-egl.so*
│       ├── libqwayland-generic.so*
│       └── libqxcb.so*
└── run.sh*`}</code></pre>
          </section>

          <aside className="sidebar">
            {/* Table of Contents */}
            <h2 className="subtitle">Table of Contents</h2>
            <ul className="list">
              <li>
                <a href="#prerequisites">Prerequisites</a>
                <ul className="list">
                  <li>
                    <a href="#linux-prerequisites">Linux</a>
                  </li>
                  <li>
                    <a href="#windows-prerequisites">Windows</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#building-app">Building the Application</a>
                <ul className="list">
                  <li>
                    <a href="#building-linux">Linux</a>
                  </li>
                  <li>
                    <a href="#building-windows">Windows</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#building-parser">Building the Rust Parser Library</a>
                <ul className="list">
                  <li>
                    <a href="#parser-linux">Linux</a>
                  </li>
                  <li>
                    <a href="#parser-windows">Windows</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#running-app">Running the Application</a>
              </li>
            </ul>
            {/* Gallery Section */}
            <h2 className="subtitle">Gallery</h2>
            <details className="details">
              <summary className="details-summary">Show Screenshots</summary>
              <div className="screenshot">
                <p className="screenshot-label">Replay List</p>
                <img
                  src="/replay-manager/MainWindow.png"
                  alt="WoT Replay Manager showing a list of replays"
                  className="screenshot-img"
                  onClick={() =>
                    openModal(
                      "/replay-manager/MainWindow.png",
                      "WoT Replay Manager showing a list of replays"
                    )
                  }
                />
              </div>
              <div className="screenshot">
                <p className="screenshot-label">Settings</p>
                <img
                  src="/replay-manager/Settings.png"
                  alt="WoT Replay Manager showing the settings"
                  className="screenshot-img"
                  onClick={() =>
                    openModal(
                      "/replay-manager/Settings.png",
                      "WoT Replay Manager showing the settings"
                    )
                  }
                />
              </div>
            </details>

            {/* Disclaimer */}
            <div className="disclaimer">
              <p>
                This project is an independent, community-developed tool.  
                It is <strong>not affiliated with, endorsed by, or supported by Wargaming.net</strong>.
              </p>
              <p>
                <em>World of Tanks</em> and all related trademarks and copyrights are the property of 
                Wargaming.net. All other trademarks and intellectual property belong to their respective owners.
              </p>
            </div>
          </aside>
        </div>
      </main>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="modal-close">
              &times;
            </button>
            <img
              src={currentImage}
              alt={imageDescription}
              className="modal-img"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;