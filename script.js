@media (max-width: 880px) {
  .menu-toggle {
    display: block;
  }

  /* base mobile state: menu hidden */
  .menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #ffffff;
    flex-direction: column;
    align-items: stretch;          /* full width links */
    padding: 12px 20px 16px;
    gap: 0;
    border-bottom: 1px solid #e5e5e5;
  }

  /* when nav has .open (from JS), show the menu */
  .nav.open .menu {
    display: flex;
  }

  .menu a {
    display: block;
    width: 100%;
    padding: 10px 0;
    text-align: left;
    border-bottom: 1px solid #f2f2f5;
    font-size: 0.95rem;
  }

  .menu a:last-child {
    border-bottom: none;
  }
}
