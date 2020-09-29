import FormBuilder from 'src/app/infrastructure/builder/forms/FormBuilder'
import Input from 'src/app/infrastructure/components/fields/Input'

export default class Establishment extends FormBuilder {
  createFields () {
    this.addField(new Input()
      .setLabel('Estado')
      .setModel('state')
      .setColumnClass('col-xs-3')
      .setFilled(true)
      .setDense(true)
      .setHasHint(true)
      .setTextHint('Ex: CE, MG, SP')
    )

    this.addField(new Input()
      .setLabel('Cidade')
      .setModel('city')
      .setColumnClass('col-xs-9')
      .setFilled(true)
      .setDense(true)
    )

    this.addField(new Input()
      .setLabel('Endereço')
      .setModel('street')
      .setColumnClass('col-xs-9')
      .setFilled(true)
      .setDense(true)
    )

    this.addField(new Input()
      .setLabel('Número')
      .setType('number')
      .setModel('number')
      .setColumnClass('col-xs-3')
      .setFilled(true)
      .setDense(true)
    )

    this.addField(new Input()
      .setLabel('Nome do Estabelecimento')
      .setModel('name')
      .setColumnClass('col-xs-12')
      .setFilled(true)
      .setDense(true)
    )
  }
}
