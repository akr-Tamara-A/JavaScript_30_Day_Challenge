class Bookkeeping {
  constructor() {
    this._form = document.querySelector(".bookkeeping__form");
    this._inputsList = document.querySelectorAll(".bookkeeping__input");
    this._submitButton = document.querySelector(".bookkeeping__submit");
    this._bookkepingTable = document.querySelector(".bookkeeping__data");
    this._controlsList = document.querySelectorAll(".bookkeeping__control");
    this._data = [
      {
        surname: 'Tramp',
        name: 'Donald',
        dateOfBirth: 1280,
        dateOfDeath: 1350,
        job: 'president',
      },
      {
        surname: 'Rosso',
        name: 'Tina',
        dateOfBirth: 1480,
        dateOfDeath: 1650,
        job: 'singer',
      },
      {
        surname: 'Asper',
        name: 'Vasya',
        dateOfBirth: 176,
        dateOfDeath: 1890,
        job: 'some',
      },
    ];
  }

  setListeners() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._data[this._data.length] = this._getInputsValue();
      this._form.reset(); 
      this.renderData();
    });

    this._controlsList.forEach(control => {
      control.addEventListener('click', (e) => {
        this._handleFilter(e.target.id);
      })  
    })
  }

  _getInputsValue() {
    this._formValues = {};
    this._inputsList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  renderData() {
    this._bookkepingTable.innerHTML = '';
    this._data.forEach((line) => {
      const lineNode = this._getTemplate();
      for (let item in line) {
        lineNode.querySelector(`.js-cell__${item}`).textContent = line[item];
      }
      this._bookkepingTable.append(lineNode);
    });
  }

  _getTemplate() {
    const line = document
      .querySelector(".bookkeeping__template")
      .content.querySelector(".bookkeeping__line")
      .cloneNode(true);
      return line;
  }

  _setDataOnPage() {
    const tableLine = this.renderData();
    this._bookkepingTable.append(tableLine);
  }

  _handleFilter(controlId) {
    const controlData = controlId.split('-');

    controlData[1] == 'Up'
    ? this._data.sort((a, b) => {
      if (a[controlData[0]] < b[controlData[0]]) return -1;
      if (b[controlData[0]] > a[controlData[0]]) return 1;
      return 0;
    }) 
    : this._data.sort((a, b) => {
      if (a[controlData[0]] > b[controlData[0]]) return -1;
      if (b[controlData[0]] < a[controlData[0]]) return 1;
      return 0;
    })

    this.renderData();
  }

}

const bookkeeping = new Bookkeeping();
bookkeeping.renderData();
bookkeeping.setListeners();
