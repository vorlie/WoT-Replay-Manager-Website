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
              The WoT Replay Manager is a desktop application built with Python
              and PyQt6 that helps you manage and launch your World of Tanks
              replays. It provides a user-friendly interface to sort, view, and
              launch replay files, as well as clean up old replays that are no
              longer compatible with the current game version.
            </p>
            <ul className="list">
              <li>
                <strong>Launch Replays:</strong> Launches selected replays using
                your bottles-cli configuration on Linux or directly with your local game installation on Windows.
              </li>
              <li>
                <strong>Detailed Information:</strong> Displays key replay
                metadata, including player name, tank, map, date, damage dealt,
                and game version.
              </li>
              <li>
                <strong>Replay Listing:</strong> Automatically detects and lists
                .wotreplay files from your specified directory.
              </li>
              <li>
                <strong>Sorting:</strong> Sort your replay list by date, player
                name, tank, map, or damage.
              </li>
              <li>
                <strong>Persistent Settings:</strong> Saves your specified paths
                so you only need to configure them once.
              </li>
              <li>
                <strong>Automatic Cleanup:</strong> Identifies and allows you to
                delete old replays that are incompatible with your current
                client version, saving you disk space.
              </li>
              <li>
                <strong>Cross-Platform Compatibility:</strong> Supports both
                Windows and Linux operating systems.
              </li>
            </ul>

            <hr className="divider" />

            {/* Prerequisites Section */}
            <h2 className="subtitle" id="prerequisites">Prerequisites</h2>
            <p className="paragraph">To run this application, you will need:</p>

            <h3 className="subsection" id="resources">0. Resources</h3>
            <ul className="link-list">
              <li>
                <a
                  href="https://docs.astral.sh/uv/reference/cli/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  uv CLI Reference
                </a>
              </li>
              <li>
                <a
                  href="https://docs.astral.sh/uv/getting-started/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  uv Getting Started
                </a>
              </li>
              <li>
                <a
                  href="https://docs.astral.sh/uv/guides/install-python/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  uv Install Python Guide
                </a>
              </li>
              <li>
                <a
                  href="https://docs.astral.sh/uv/getting-started/installation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  uv Installation
                </a>
              </li>
              <li>
                <a
                  href="https://docs.astral.sh/uv/guides/scripts/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  uv Scripts Guide
                </a>
              </li>
              <li>
                <a
                  href="https://usebottles.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bottles Website
                </a>
              </li>
            </ul>

            <h3 className="subsection" id="install-python">1. Python 3.x</h3>
            <p className="paragraph">
              Make sure Python is installed on your system. If not, you can run{" "}
              <pre>
                <code>pip install uv</code>
              </pre>
            </p>
            <p className="paragraph">
              On Linux, you may need to use{" "}
              <code className="code">python3</code> and{" "}
              <code className="code">pip3</code> instead of{" "}
              <code className="code">python</code> and{" "}
              <code className="code">pip</code> in your commands.
            </p>

            <h3 className="subsection" id="project-files">2. Project Files</h3>
            <p className="paragraph">
              Download or clone the project files from the GitHub repository:
            </p>
            <pre>
              <code>
                git clone <a href="https://github.com/vorlie/wot-replay-manager.git" target="_blank" rel="noopener noreferrer">https://github.com/vorlie/wot-replay-manager.git</a>
              </code>
            </pre>

            <h3 className="subsection" id="create-venv">
              3. Create a Virtual Environment with uv
            </h3>
            <p className="paragraph">
              It's a best practice to install project dependencies in a virtual
              environment to avoid conflicts with other Python projects. Using{" "}
              <code className="code">uv</code> is the fastest way to set this
              up. Open your terminal or command prompt and run the following
              command inside the project directory root:
            </p>
            <pre>
              <code>uv venv</code>
            </pre>

            <h3 className="subsection">4. Install Dependencies</h3>
            <p className="paragraph">
              With your virtual environment created, you can install all
              necessary libraries by running a single command:{" "}
              <pre>
                <code>uv pip install -r requirements.txt</code>
              </pre>
            </p>

            <h3 className="subsection" id="bottles-cli">
              5. Bottles CLI (Optional, for replay playback)
            </h3>
            <p className="paragraph">
              This tool is typically used on Linux systems for managing Windows
              applications.
            </p>
            <p className="paragraph">
              This step can be skipped if you are using Windows, as replays will
              launch with your local game installation.
            </p>
            <p className="paragraph">
              It is required to launch replays with your World of Tanks
              executable if you are on Linux. The rest of the application's
              features will work without it.
            </p>
            <p className="paragraph">
              You can find more information about Bottles and its CLI on the
              official website: <a href="https://usebottles.com/" target="_blank" rel="noopener noreferrer">https://usebottles.com/</a>
            </p>

            <h3 className="subsection" id="run-app">6. How to Run the Application</h3>
            <p className="paragraph">
              With the virtual environment created and dependencies installed,
              you can run the application directly from your terminal.
            </p>
            <p className="paragraph">
              Using <code className="code">uv run</code> will automatically use
              the correct virtual environment:{" "}
              <pre>
                <code>uv run python main.py</code>
              </pre>
            </p>

            <hr className="divider" />

            {/* How to Use Section */}
            <h2 className="subtitle" id="how-to-use">How to Use</h2>
            <h3 className="subsection" id="first-time-setup">1. First-Time Setup</h3>
            <p className="paragraph">
              Upon first launch, the application will prompt you to configure
              the necessary settings. You will need to provide the following
              paths:
            </p>
            <ul className="list">
              <li>
                <strong>Bottles Bottle Name</strong> (Linux only): The name of
                the Bottles container where World of Tanks is installed (e.g.,{" "}
                <code className="code">WindowsGames</code>
                ). This setting will be ignored on Windows.
              </li>
              <li>
                <strong>WoT Executable Path</strong>: The full path to your{" "}
                <code className="code">WorldOfTanks.exe</code> file.
              </li>
              <li>
                <strong>Replays Folder Path</strong>: The folder where your{" "}
                <code className="code">.wotreplay</code> files are saved.
              </li>
              <li>
                <strong>Client Version XML Path</strong>: The path to the{" "}
                <code className="code">version.xml</code> file in your World of
                Tanks game directory (used for replay cleanup).
              </li>
            </ul>
            <p className="paragraph">
              The file dialogs will automatically open in the last known game
              directory to make it easier to find the correct files.
            </p>

            <h3 className="subsection" id="managing-replays">2. Managing Replays</h3>
            <ul className="list">
              <li>
                The main window will display a list of all detected replays.
              </li>
              <li>
                Use the "<strong>Sort by</strong>" dropdown menu to change the
                order of the replay list.
              </li>
              <li>
                Select a replay from the list and click the "
                <strong>Launch Replay</strong>" button to start the replay in
                World of Tanks.
              </li>
            </ul>

            <h3 className="subsection" id="cleanup-old-replays">3. Cleaning Up Old Replays</h3>
            <ul className="list">
              <li>
                Click the "<strong>Cleanup Old Replays</strong>" button to find
                and delete replays that are no longer compatible with your
                current game version.
              </li>
              <li>
                A confirmation dialog will appear, showing you how many replays
                are about to be deleted.
              </li>
              <li>
                This feature helps you free up disk space by removing outdated
                files.
              </li>
            </ul>

            <hr className="divider" />

            {/* Code Structure Section */}
            <h2 className="subtitle" id="code-structure">Code Structure</h2>
            <ul className="list">
              <li>
                <code className="code">main.py</code>: The main application file
                containing the `ReplayManager` and `SettingsDialog` classes. It
                handles the UI, user interactions, and core application logic.
              </li>
              <li>
                <code className="code">utils/__init__.py</code>: Contains helper
                functions, such as `get_replay_data`, which is responsible for
                parsing the replay files and extracting metadata.
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
                    <a href="#resources">0. Resources</a>
                  </li>
                  <li>
                    <a href="#install-python">1. Python 3.x</a>
                  </li>
                  <li>
                    <a href="#project-files">2. Project Files</a>
                  </li>
                  <li>
                    <a href="#create-venv">3. Create a Virtual Environment with uv</a>
                  </li>
                  <li>
                    <a href="#install-dependencies">4. Install Dependencies</a>
                  </li>
                  <li>
                    <a href="#bottles-cli">5. Bottles CLI (Optional, for replay playback)</a>
                  </li>
                  <li>
                    <a href="#run-app">6. How to Run the Application</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#how-to-use">How to Use</a>
                <ul className="list">
                  <li>
                    <a href="#first-time-setup">1. First Time Setup</a>
                  </li>
                  <li>
                    <a href="#managing-replays">2. Managing Replays</a>
                  </li>
                  <li>
                    <a href="#cleanup-old-replays">3. Cleaning Up Old Replays</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#code-structure">Code Structure</a>
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
