export default function handler(req, res) {
  res.status(200).json({
    title: 'work compensation',

    data: [
      {
        pageId: 1,
        title: 'Who is the primary contact for this application?',
        desc:
          "This person will receive all communications from NewFront about this policy. You can change this contact information later. If you'renot sure, just add your contact information.",
        _uid: '0c946643-5a83-4545-baea-055b27b51e8a',
        fields: [
          {
            component: 'input',
            label: 'Full Name',
            type: 'text',
            _uid: 'eb169f76-4cd9-4513-b673-87c5c7d27e02',
          },
          {
            component: 'input',
            label: 'Role',
            type: 'text',
            _uid: '7f885969-f8ba-40b9-bf5d-0d57bc9c6a8d',
          },
          {
            component: 'input',
            label: 'Phone number',
            type: 'text',
            _uid: 'f61233e8-565e-43d0-9c14-7d7f220c6020',
          },
        ],
      },
      {
        pageId: 2,
        title: 'Tell us about your company',
        _uid: '0c946643-5a83-4545-baea-055b27b51e8a',
        fields: [
          {
            component: 'input',
            label: 'Company name',
            type: 'text',
            _uid: 'eb169f76-4cd9-4513-b673-87c5c7d27e03',
          },
          {
            component: 'input',
            label: 'What is your Federal Employer Identification Number?(FEIN)',
            type: 'text',
            _uid: '7f885969-f8ba-40b9-bf5d-0d57bc9c6a8e',
          },
          {
            component: 'input',
            label: 'Years in business',
            type: 'text',
            _uid: 'f61233e8-565e-43d0-9c14-7d7f220c602a',
          },
          {
            component: 'input',
            label: 'Number of locations',
            type: 'text',
            _uid: 'f61233e8-565e-43d0-9c14-7d7f220c6021',
          },
          {
            component: 'input',
            label: 'In which states do you operate?',
            type: 'text',
            _uid: 'f61233e8-565e-43d0-9c14-7d7f220c6022',
          },
        ],
      },
      {
        pageId: 3,
        title: 'Tell us about your employees',
        _uid: '3a30803f-135f-442c-ab6e-d44d7d7a5164',
        fields: [
          {
            component: 'input',
            label: "What's the name of the clinic, physician, or ER used for work injuries?",
            type: 'text',
            _uid: 'f61233e8-565e-43d0-9c14-7d7f220c602y',
          },
          {
            component: 'checkbox',
            label: 'Do you provide group medical insurance?',
            type: 'checkbox',
            _uid: 'bd90f44a-d479-49ae-ad66-c2c475dca66b',
          },
          {
            component: 'checkbox',
            label: 'Do you offer a retirement or persion plan?',
            type: 'checkbox',
            _uid: 'bd90f44a-d479-49ae-ad66-c2c475dca64b',
          },
          {
            component: 'checkbox',
            label: 'Do you give a paid vacation?',
            type: 'checkbox',
            _uid: 'bd90f44a-d479-49ae-ad66-c2c475dca65b',
          },
          {
            component: 'text',
            label: 'Please provide details about the paid vacations',
            type: 'text',
            _uid: 'bd90f44a-d479-49ae-ad66-c2c475daa63b',
            conditional: {
              value: true,
              field: 'bd90f44a-d479-49ae-ad66-c2c475dca65b_bd90f44a-d479-49ae-ad66-c2c475daa63b',
            },
          },
        ],
      },
      {
        pageId: 4,
        title: 'How do you want to pay for your policy?',
        _uid: '0c946643-5a83-4545-baea-055b27b51e9b',
        fields: [
          {
            component: 'radio',
            label: 'Radio Buttons',
            type: 'radio',
            _uid: 'bd90f44a-d479-49ae-ad66-c2c475dca66b',
            options: [
              {
                component: 'option',
                label: 'I want to pay NewFront',
                desc:
                  "You'll pay NewFront instead of paying paying each insurance company seperately. There are no fees.",
                value: 'newfront',
              },
              {
                component: 'option',
                label: 'I will pay the insurance company directly',
                desc:
                  "You'll receive the bills from the insurance company and it will be your responsibility to make sure they are paid to keep your coverage.",
                value: 'company',
              },
            ],
          },
        ],
      },
    ],
  });
}
