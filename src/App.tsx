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

            {/* HERO */}
            <h1 className="title" id="home">
              WoT Replay Manager
            </h1>

            <p className="paragraph">
              WoT Replay Manager is a lightweight, native desktop application built in{" "}
              <strong>Rust</strong> using <strong>egui</strong>.
              It lets you browse, organize, and launch World of Tanks replay files
              quickly and without external dependencies.
            </p>

            <div className="button-group">
              <a
                href="https://github.com/vorlie/WoT-Replay-Manager/releases/latest"
                className="download-button"
              >
                Download Latest Release
              </a>
            </div>

            <hr className="divider" />

            {/* FEATURES */}
            <h2 className="subtitle">Features</h2>

            <ul className="list">
              <li>
                <strong>Native Rust Application:</strong> Fully written in Rust with no C++ or Qt dependencies.
              </li>

              <li>
                <strong>Replay Management:</strong>
                <ul>
                  <li>Scan and list all .wotreplay files from a selected directory</li>
                  <li>View detailed metadata (player, tank, map, date, damage, version)</li>
                </ul>
              </li>

              <li>
                <strong>Fast Organization:</strong>
                <ul>
                  <li>Sort and filter replays by multiple attributes</li>
                  <li>Instant search across replay history</li>
                </ul>
              </li>

              <li>
                <strong>Seamless Integration:</strong>
                <ul>
                  <li>Launch replays directly using your World of Tanks installation</li>
                  <li>Automatic local settings persistence</li>
                </ul>
              </li>
            </ul>

            <hr className="divider" />

            {/* BUILD */}
            <h2 className="subtitle" id="building-app">
              Building from Source
            </h2>

            <p className="paragraph">
              Requires the Rust toolchain (stable). No additional frameworks or UI toolkits are needed.
            </p>

            <pre>
              <code>
                git clone &lt;repo-url&gt;
                cd WoT-Replay-Manager
                cargo build --release
              </code>
            </pre>

            <p className="paragraph">
              The compiled binary will be available in:
            </p>

            <pre>
              <code>target/release/wot-replay-manager.exe</code>
            </pre>

            <hr className="divider" />

            {/* RUN */}
            <h2 className="subtitle" id="running-app">
              Running the Application
            </h2>

            <ul className="list">
              <li>Download or build the release</li>
              <li>Run the executable directly</li>
              <li>The application will create and store settings automatically</li>
            </ul>

            <pre>
              <code>
                ./wot-replay-manager.exe
              </code>
            </pre>

            <hr className="divider" />

            {/* NOTES */}
            <h2 className="subtitle">Notes</h2>

            <ul className="list">
              <li>Built entirely in Rust using egui</li>
              <li>No Qt, C++, or external runtime dependencies</li>
              <li>Cross-platform design (Windows-first builds recommended)</li>
              <li>Supports .wotreplay files only</li>
            </ul>

          </section>

          {/* SIDEBAR */}
          <aside className="sidebar">

            {/* TABLE OF CONTENTS */}
            <h2 className="subtitle">Table of Contents</h2>
            <ul className="list">
              <li><a href="#building-app">Building from Source</a></li>
              <li><a href="#running-app">Running the Application</a></li>
            </ul>

            {/* GALLERY */}
            <h2 className="subtitle">Gallery</h2>

            <details className="details">
              <summary className="details-summary">Show Screenshots</summary>

              <div className="screenshot">
                <p className="screenshot-label">Replay List</p>
                <img
                  src="/replay-manager/MainWindow.png"
                  alt="Replay list"
                  className="screenshot-img"
                  onClick={() =>
                    openModal(
                      "/replay-manager/MainWindow.png",
                      "Replay list view"
                    )
                  }
                />
              </div>
            </details>

            {/* DISCLAIMER */}
            <div className="disclaimer">
              <p>
                This project is a community-developed tool and is not affiliated with
                Wargaming.net or World of Tanks.
              </p>
            </div>
          </aside>
        </div>
      </main>

      {/* IMAGE MODAL */}
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