import './style.css'
import LightningFS from "@isomorphic-git/lightning-fs"
import git from 'isomorphic-git'
import http from 'isomorphic-git/http/web/index'

const fs = new LightningFS('fs', {wipe: true})
// I prefer using the Promisified version honestly
const pfs = fs.promises

const dir = "/test"

async function run () {
  await pfs.mkdir(dir);
  // Behold - it is empty!
  const result1 = await pfs.readdir(dir);

  console.log({result1})
  await git.clone({
    fs,
    http,
    dir,
    corsProxy: 'https://cors.isomorphic-git.org',
    url: 'https://github.com/isomorphic-git/isomorphic-git',
    ref: 'main',
    singleBranch: true,
    depth: 10
  });
  
  // Now it should not be empty...
  const result2 = await pfs.readdir(dir);
  console.log({result2})
}

run()