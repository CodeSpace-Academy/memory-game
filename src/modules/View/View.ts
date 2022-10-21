export class View {
  render() {
    let items = "";

    for ({ value, key } of items) {
      items = `
            ${items}
        
            <li><button data-key>asd</button></li>
        `;
    }

    const update = /* html */ `
            <h1>Memory Game</h1>

            <ul>
                <li><button>asd</button></li>
            </ul>
        `;

    return update;
  }

  constructor(state) {
    this.state = state;
  }
}

export default View;
