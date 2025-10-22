const fs = require('fs');

const getSidebar = () => {
  const dirList = fs.readdirSync('./docs').filter(dir => dir !== '.vuepress');
  const sidebar = dirList.filter(dir => !dir.includes('.md')).map(dir => {
    const content = fs.readFileSync(`./docs/${dir}/README.md`, 'utf8');
    const title = content.match(/#.+/)[0].replace('#', '').trim();
    const path = `/${dir}`;
    const children = fs.readdirSync(`./docs/${dir}`).filter(file => file !== 'README.md').map(file => {
      const path = `/${dir}`;
      const child =`${path}/${file}`;
      return child;
    });

    return {
      title,
      path,
      collapsable: true,
      children,
    }
  });
  // sidebar.sort((a, b) => a.path.match(/[0-9]+/)[0] - b.path.match(/[0-9]+/)[0]);
  // const sortedSidebar = sidebar.map(item => {
  //   const path = item.path.replace(/[0-9]+-/, '');
  //   const children = item.children.map(c => c.replace(/[0-9]+-/, ''))

  //   return {
  //     ...item,
  //     path,
  //     children
  //   };
  // });
  sidebar.sort((a, b) => b.children.length - a.children.length);
  return sidebar;
};

module.exports = getSidebar;