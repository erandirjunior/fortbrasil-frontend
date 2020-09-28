import FormBuilder from 'src/app/infrastructure/builder/forms/FormBuilder'
import Input from 'src/app/infrastructure/components/fields/Input'
import Button from 'src/app/infrastructure/components/fields/Button'

export default class Login extends FormBuilder {
  createFields () {
    this.addField(new Input()
      .setLabel('E-mail')
      .setModel('email')
      .setColumnClass('col-xs-12')
      .setFilled(true)
      .setAutofocus(true)
      .setHasPrepend(true)
      .setPrependIcon('email')
      .setAutofocus(true)
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
      .setLabel('Entrar')
      .setColumnClass('col-xs-12')
      .setClass('full-width button-color')
      .setClick('login')
    )

    this.addField(new Button()
      .setLabel('Crie uma conta')
      .setNoCaps(true)
      .setFlat(true)
      .setTextColor('grey-9')
      .setColumnClass('col-xs-12')
      .setClass('full-width')
      .setRipple(false)
      .setTo('/register')
    )
  }
}
