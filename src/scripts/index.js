import * as Bindery from 'bindery'

let emptyPageRule = Bindery.createRule({
  eachPage: function(page, book) {
    if (page.isEmpty) {
      page.background.style.backgroundColor = 'yellow';
    }
  }
});

Bindery.makeBook(
  { 
    content: '#content',
    pageSetup: {
      margin: { top: '48pt', inner: '24pt', outer: '24pt', bottom: '32pt' },
    },
    rules: [
      Bindery.PageBreak({ selector: 'h1', position: 'after', continue: 'right' }),
      Bindery.PageBreak({ selector: 'h2', position: 'before', continue: 'right' }),
      Bindery.PageBreak({ selector: '.text', position: 'before', continue: 'right' }),
      Bindery.PageBreak({ selector: '.break', position: 'both', continue: 'next' }),
      Bindery.PageBreak({ selector: 'figure', position: 'both', continue: 'next' }),
      Bindery.RunningHeader({
        render: (pageInfo) => {
          if(!pageInfo.isEmpty && pageInfo.number != 1) {
            return `<div class="header">${pageInfo.number}</div>`
          } else {
            return ''
          }
        }
      }),
      emptyPageRule
    ]
  }
);