// Sidebar.jsx
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menu">
      <header>
        <div className="navbar">
          <div className="menu-icon" onClick={toggleMenu}>
            <div className={isMenuOpen ? "bar bar1 open" : "bar bar1"}>-</div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="side-menu">
          {/* サイドメニューのコンテンツをここに追加 */}
          <ul>
            <li>メニュー項目1</li>
            <li>メニュー項目2</li>
            <li>メニュー項目3</li>
          </ul>
        </div>
      )}

      {/* その他のコンテンツをここに追加 */}
    </div>
  );
};
