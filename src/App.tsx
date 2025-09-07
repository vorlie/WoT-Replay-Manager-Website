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
              WoT Replay Manager is a desktop application built with C++/Qt6 and a Python parser. It helps you manage and launch your World of Tanks replays with a modern, user-friendly interface. The app automatically parses replay files, displays detailed metadata, and allows cleanup of outdated replays.
            </p>
            <ul className="list">
              <li>
                <strong>Cross-Platform:</strong> Works on both Windows and Linux.
              </li>
              <li>
                <strong>Replay Listing:</strong> Detects and lists .wotreplay files from your chosen directory.
              </li>
              <li>
                <strong>Detailed Information:</strong> Shows player name, tank, map, date, damage, and client version.
              </li>
              <li>
                <strong>Sorting:</strong> Sort replays by date, player name, tank, map, or damage.
              </li>
              <li>
                <strong>Launch Replays:</strong> Launch selected replays using your game installation.
              </li>
              <li>
                <strong>Persistent Settings:</strong> Saves paths (WoT executable, replays folder, etc.) for future sessions.
              </li>
              <li>
                <strong>Automatic Cleanup:</strong> Delete replays incompatible with your current client version. (In development)
              </li>
            </ul>
            <div className="button-group">
              <a
                href="https://github.com/vorlie/WoT-Replay-Manager/releases/download/1.0/WoT-Replay-Manager-1.0-Win64.zip"
                download
                className="download-button"
              >
                Download for Windows
              </a>
              <a
                href="https://github.com/vorlie/WoT-Replay-Manager/releases/download/1.0/WoT-Replay-Manager-1.0-linux-x86_64.tar.gz"
                download
                className="download-button"
              >
                Download for Linux
              </a>
            </div>
            <hr className="divider" />

            {/* Prerequisites Section */}
            <h2 className="subtitle" id="prerequisites">Prerequisites</h2>
            
            <h3 className="subsection" id="linux-prerequisites">Linux</h3>
            <ul className="list">
              <li>
                <strong>Qt6 libraries</strong><br />
                Ensure Qt6 is installed. If you want a fully standalone binary, you can build static Qt6.
              </li>
              <li>
                <strong>Python 3.12</strong><br />
                Required to compile the parser using Nuitka.
              </li>
              <li>
                <strong>Nuitka (for parser compilation)</strong><br />
                <pre>
                  <code>
                    python3.12 -m pip install --upgrade pip
                    python3.12 -m pip install nuitka
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
                <strong>Python 3.12</strong> (for building the parser).
              </li>
              <li>
                <strong>Nuitka</strong> (for building the parser executable).
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
              <li>Make sure the <code className="code">parser</code> folder is present alongside the executable.</li>
            </ul>

            <hr className="divider" />

            {/* Building the Python Parser Section */}
            <h2 className="subtitle" id="building-parser">Building the Python Parser (<code className="code">replay_parser</code>)</h2>

            <h3 className="subsection" id="parser-linux">Linux</h3>
            <pre>
              <code>
                cd parser
                python3.12 -m venv .venv
                source .venv/bin/activate
                pip install --upgrade pip nuitka

                python3.12 -m nuitka --standalone replay_parser.py
                cp -r replay_parser.dist/* ../parser/
              </code>
            </pre>

            <h3 className="subsection" id="parser-windows">Windows</h3>
            <pre>
              <code>
                cd parser
                python -m nuitka --standalone replay_parser.py
                # Copy all generated files to parser folder
              </code>
            </pre>
            <p className="paragraph">
              Note: Antivirus software may flag the compiled parser. Users can build it themselves to avoid this.
            </p>
            <hr className="divider" />
            
            {/* Running the Application Section */}
            <h2 className="subtitle" id="running-app">Running the Application</h2>
            <ul className="list">
              <li>
                <strong>Linux</strong>: Use <code className="code">run.sh</code> to launch. It sets <code className="code">LD_LIBRARY_PATH</code>, <code className="code">QT_PLUGIN_PATH</code>, and platform plugin (<code className="code">QT_QPA_PLATFORM=xcb</code>).
              </li>
              <li>
                <strong>Windows</strong>: Run <code className="code">WoT-Replay-Manager.exe</code>. Ensure the parser folder is present alongside the executable.
              </li>
            </ul>
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
                <a href="#building-parser">Building the Python Parser</a>
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