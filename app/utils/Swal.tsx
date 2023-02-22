import type { SweetAlertOptions } from 'sweetalert2'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const ReactSwal = withReactContent(Swal)

interface CustomSweetAlertOptions extends SweetAlertOptions {
  title: SweetAlertOptions['title']
  position: SweetAlertOptions['position']
}

const fireSwal = (props: CustomSweetAlertOptions) => {
  const { title, position, ...rest } = props

  return ReactSwal.fire({
    title,
    position,
    showConfirmButton: false,
    background: '#05183c',
    color: '#ddd',
    width: 'auto',
    customClass: {
      popup: 'swal2-border-radius'
    },
    ...rest
  })
}

export { fireSwal }
