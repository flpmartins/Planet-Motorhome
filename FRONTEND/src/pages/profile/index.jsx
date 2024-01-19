import { useCallback, useRef, useState } from 'react';
import { Input } from '../../shared/components/form/input';
import { Button } from '../../shared/components/form/button';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { FiCamera } from 'react-icons/fi';
import { AiFillLock } from 'react-icons/ai';
import { MdOutlineMailOutline } from 'react-icons/md';
import getValidationErrors from '../../shared/utils/getValidationErrors'
import { useAuth } from '../../shared/hooks/auth';
import { useToast } from '../../shared/hooks/toast';
import { useTheme } from 'styled-components';
import { enviroments } from '../../shared/environments';
import { uploadImage, updateUserData } from '../../api/planet-motorhome-api';

import * as Yup from 'yup'

import {
  Container,
  Content,
  Img,
  FormContainer,
  ImageContainer,
  ButtonImage,
} from "./styles";

export const Profile = () => {
  const formRef = useRef(null)
  const theme = useTheme()
  const { user, updateUser } = useAuth()
  const { addToast } = useToast()


  const navigate = useNavigate()

  const [picture, setPicture] = useState(() => {
    const appData = JSON.parse(localStorage.getItem(enviroments.APP_NAME));

    if (appData && appData.user && appData.user.avatar) {
      return appData.user.avatar;
    }

    return '';
  });
  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          password: Yup.string(),
          confirm_password: Yup.string().oneOf(
            [Yup.ref('password'), null],
            'As senhas devem ser iguais',
          ),
        })

        await schema.validate(data, { abortEarly: false })

        Object.assign(data, {
          id: user.id,
        })

        const { data: userUpdated } = await updateUserData(data)

        updateUser(userUpdated)

        addToast({
          type: 'success',
          title: 'Dados alterado com sucesso !',
        })
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationErrors(err)

          formRef.current.setErrors(error)
        }

        addToast({
          type: 'error',
          title: 'Erro na atualização',
          description: err.message,
        })
      }
    },
    [addToast, updateUser, user.id],
  )

  const handleGoBack = useCallback(() => {
    navigate('/home')
  }, [navigate])

  const handleUploadImage = useCallback(
    async (event) => {
      try {
        const formData = new FormData()
        formData.append('avatar', event.target.files[0])

        console.log('Fazendo upload da imagem...')

        const { data } = await uploadImage(formData)

        console.log('Upload de imagem bem-sucedido:', data)

        updateUser(data)
        setPicture(data.avatar)
      } catch (error) {
        console.error('Erro no upload da imagem:', error)
      }
    },
    [updateUser],
  )
  return (
    <Container>
      <Content>
        <FormContainer ref={formRef} onSubmit={handleSubmit} initialData={user}>
          <h1>Altere suas credenciais aqui!</h1>
          <hr />
          <Input name="name" type="text" placeholder="Nome" icon={FaUserAlt} />
          <Input name="email" type="text" placeholder="Email" icon={MdOutlineMailOutline} />
          <h1>Altere sua senha aqui!</h1>
          <hr />
          <Input name="password" type="password" placeholder="Digite sua senha" icon={AiFillLock} />
          <Input name="confirmPassword" type="password" placeholder="Confirme sua senha" icon={AiFillLock} />
          <Button type="submit">Salvar informações</Button>
        </FormContainer>
        <ImageContainer>
          <ButtonImage htmlFor="picture">
            <FiCamera />
            <input type="file" onChange={handleUploadImage} id="picture" />
          </ButtonImage>
          <Img
            src={
              picture
                ? `${enviroments.URL_API_PLANETMOTORHOME + '/files/' + picture}`
                : `https://ui-avatars.com/api/?font-size=0.33&background=${theme.background.substring(
                  1,
                  theme.background.length,
                )}&color=${theme.contrast.substring(
                  1,
                  theme.contrast.length,
                )}&name=${user.name}`
            }
            alt={user.name}
          />

        </ImageContainer>
      </Content>
    </Container>
  );
};
