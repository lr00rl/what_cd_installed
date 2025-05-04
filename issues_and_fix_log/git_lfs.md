Encountering an error while trying to push files to GitHub. This is related to file size limits on GitHub.

The error message indicates that you're trying to push a large file (243.25 MB) named "pose_hrnet_w48_384x288.pth" to GitHub, but GitHub has a file size limit of 100 MB for regular repositories.

The key part of the error is:

```
remote: error: File HRNet/model/pose_hrnet_w48_384x288.pth is 243.25 MB; this exceeds GitHub's file size limit of 100.00 MB
remote: error: GH001: Large files detected. You may want to try Git Large File Storage - https://git-lfs.github.com.
```

GitHub is recommending that you use Git Large File Storage (Git LFS), which is designed specifically for handling large files in Git repositories.

Here's what you can do to resolve this issue:

1.  Install Git LFS on your local machine
2.  Set up Git LFS in your repository
3.  Track your large file with Git LFS
4.  Try pushing again


## Step 1: Install Git LFS

First, you need to install Git LFS on your computer:

### For Windows:
```
# Using Chocolatey
choco install git-lfs

# Or download and install from the Git LFS website
```

### For macOS:
```
# Using Homebrew
brew install git-lfs

# Using MacPorts
port install git-lfs
```

### For Linux:
```
# Debian/Ubuntu
sudo apt install git-lfs

# Fedora
sudo dnf install git-lfs

# CentOS/RHEL
sudo yum install git-lfs
```

## Step 2: Initialize Git LFS in your repository

Navigate to your repository directory in the terminal and run:
```
git lfs install
```

## Step 3: Track your large file with Git LFS

Tell Git LFS to track your large file:
```
git lfs track "HRNet/model/pose_hrnet_w48_384x288.pth"
```

You might also want to track all similar files:
```
git lfs track "*.pth"
```

## Step 4: Make sure .gitattributes is committed

Git LFS creates or updates a .gitattributes file. You need to add and commit this:
```
git add .gitattributes
git commit -m "Set up Git LFS tracking for large model files"
```

## Step 5: Add and commit your large file(s)

```
git add HRNet/model/pose_hrnet_w48_384x288.pth
git commit -m "Add HRNet pose model file using Git LFS"
```

## Step 6: Push to GitHub

```
git push origin main
```

## Additional tips:

1. If you've already tried to commit the large file before setting up Git LFS, you might need to remove it from Git's history first.

2. Consider whether you actually need to include the model file in your repository. Many ML projects store large model files externally and include download scripts instead.

3. Be aware that GitHub has a storage limit for Git LFS. Free accounts get 1 GB of free LFS storage and 1 GB of monthly bandwidth.

4. If you exceed these limits, you'll need to purchase additional storage and bandwidth or explore alternatives like model hosting services.

