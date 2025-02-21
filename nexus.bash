#!/bin/bash
sudo apt update -y
sudo apt install unzip tmux git -y
sudo apt install build-essential -y
sudo apt install -y pkg-config libssl-dev -y
cd /usr/local
sudo wget https://github.com/protocolbuffers/protobuf/releases/download/v29.3/protoc-29.3-linux-x86_64.zip
sudo unzip protoc-29.3-linux-x86_64.zip
sudo chmod +x /usr/local/bin/protoc
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
. "$HOME/.cargo/env"
source $HOME/.cargo/env
tmux
curl https://cli.nexus.xyz/ | sh
