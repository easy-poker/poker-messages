const { exec } = require("child_process");

const args = process.argv.slice(2);
const version = args[0];

if (!version) {
  throw new Error("Version is falsy");
}

exec(`json -I -f package.json -e 'this.version="${version}"'`, (error) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }

  exec(
    `git add . && git commit -m "version ${version}"`,
    (error) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }

      exec(`git tag -a v${version} -m "version ${version}"`, (error) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }

        exec(`git push && git push origin v${version}`, (error) => {
          if (error) {
            console.log(`error: ${error.message}`);
            return;
          }

          console.log(`🎉 Publish version ${version}`);
        });
      });
    }
  );
});
