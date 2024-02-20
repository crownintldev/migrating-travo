//  ** React Imports
import React from 'react'

// ** Third Party Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'


import CustomHookTextField from 'src/common/dataEntry/CustomHookTextField'
import SimpleSelectHookField from 'src/common/dataEntry/SimpleSelectHookField'

import SelectHookField from 'src/common/dataEntry/SelectHookField'
import CustomOpenDrawer from 'src/common/customButton/CustomOpenDrawer'

const defaultValues = {
  bookletNumber: '',
  cnic: '',
  country: '',
  dob: '',
  doi: '',
  gender: '',
  givenName: '',
  fatherName: '',
  issuingAuthority: '',
  nationality: '',
  passportNumber: '',
  religion: '',
  remarks: '',
  surname: '',
  trackingNumber: '',
  onModel: 'Agent',
  files: [],
  deletedFiles: [],
  by: ''
}

// ------------------Passport Form-----------------------
const PassportForm = () => {


  const {
    control,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver(schema)
  })


  const passportField1 = [
    {
      name: 'passportNumber'
    },
    {
      name: 'bookletNumber'
    },
    {
      name: 'cnic',
      type: 'text'
    },
    {
      name: 'surname',
      required: true
    },
    {
      name: 'givenName',
      required: true
    },
    {
      name: 'pob',
      required: true
    },
    {
      name: 'dateOfBirth',
      required: true,
      placeholder: 'Insert date of birth'
    },
    {
      name: 'dateOfIssue',
      required: true,
      placeholder: 'Insert date of issue'
    },
    {
      name: 'dateOfExpire',
      required: true,
      placeholder: 'Insert date of expire'
    }
  ]

  const passportField2 = [
    {
      name: 'fatherName'
    },
    {
      name: 'issuingAuthority'
    },
    {
      name: 'trackingNumber'
    },
    {
      textarea: true,
      name: 'remarks',
      required: true,
      placeholder: 'Enter Remarks'
    }
  ]




  return (
      <form>
        <div>
          {passportField1.map((item) => (
          
              <CustomHookTextField item={item} control={control} errors={errors} />
          ))}

          <div>
            <SimpleSelectHookField
              control={control}
              errors={errors}
              name={'country'}
              options={['Male', 'Female', 'Other']}
              label={'Country'}
              placeholder='Search Countries'
              select={true}
              MenuProps={{
                disablePortal: true,
                disableCloseOnSelect: true
              }}
            />
          </div>
          <div>
            <SimpleSelectHookField
              control={control}
              errors={errors}
              name={'nationality'}
              options={['Male', 'Female', 'Other']}
              label={'Nationality'}
              placeholder='Search Nationality'
              select={true}
              MenuProps={{
                disablePortal: true,
                disableCloseOnSelect: true
              }}
            />
          </div>
          <div>
            <SimpleSelectHookField
              control={control}
              errors={errors}
              name={'gender'}
              options={['Male', 'Female', 'Other']}
              label={'Gender'}
              placeholder='Search Gender'
              select={true}
              MenuProps={{
                disablePortal: true,
                disableCloseOnSelect: true
              }}
            />
          </div>
          <div>
            <SimpleSelectHookField
              control={control}
              errors={errors}
              name={'religion'} 
              options={['Islam', 'Christan', 'Hindu', 'Sikh']}
              label={'Religion'}
              placeholder='Search Religion'
              select={true}
              MenuProps={{
                disablePortal: true,
                disableCloseOnSelect: true
              }}
            />
          </div>
          {passportField2.map((item) => (
            <div key={item.name}>
              <CustomHookTextField
                item={item}
                control={control}
                errors={errors}
                required={true}
              />
            </div>
          ))}
          <div>
            <SimpleSelectHookField
              control={control}
              errors={errors}
              name={'onModel'}
              options={['Client', 'Company', 'Agent']}
              label={'Refer Category'}
              placeholder='Select Refer'
              select={true}
              MenuProps={{
                disablePortal: true,
                disableCloseOnSelect: true
              }}
            />
          </div>
          <CustomOpenDrawer
            ButtonTitle={`Add ${watchedOnModel}`}
            drawerTitle={`Add ${watchedOnModel} Form`}
            Form={MemberForm}
            fetchApi={fetchMember}
            formName={formName}
            api={api}
          />
          <div>
            <SelectHookField
              control={control}
              errors={errors}
              name='by'
              options={byItem ?? []}
              showValue='name'
              label='Refer'
              placeholder='Choose Refer'
            />
          </div>

        </div>
      </form>
  )
}

export default PassportForm
