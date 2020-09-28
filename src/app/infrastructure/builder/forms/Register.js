import FormBuilder from 'src/app/infrastructure/builder/forms/FormBuilder'
import Input from 'src/app/infrastructure/components/fields/Input'
import Button from 'src/app/infrastructure/components/fields/Button'

export default class Register extends FormBuilder {
  createFields () {
    this.addField(new Input()
      .setLabel('Nome')
      .setModel('name')
      .setColumnClass('col-xs-12')
      .setFilled(true)
      .setAutofocus(true)
      .setHasPrepend(true)
      .setPrependIcon('person')
    )

    this.addField(new Input()
      .setLabel('E-mail')
      .setModel('email')
      .setColumnClass('col-xs-12')
      .setFilled(true)
      .setHasPrepend(true)
      .setPrependIcon('email')
    )

    this.addField(new Input()
      .setLabel('Senha')
      .setModel('password')
      .setType('password')
      .setColumnClass('col-xs-12')
      .setFilled(true)
      .setHasPrepend(true)
      .setPrependIcon('vpn_key')
    )

    this.addField(new Button()
      .setLabel('Cadastrar')
      .setColumnClass('col-xs-12')
      .setClass('full-width button-color')
      .setClick('register')
    )
  }
}
