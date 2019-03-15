import { ApeType } from '../../ApeType';
import { Protocol } from '../../data/protocols';
import { randomDomain, randomProtocol, randomUrlPath } from '../../utils/randomizer';

class ApeUrl implements ApeType {
  private protocol: Protocol = 'random';
  private urlDomain: string = 'www.loremipsum.com';
  private urlPath: string[] = [];
  private useRandomPath: boolean = false;
  private useRandomDomain: boolean = true;

  private getProtocol() {
    return this.protocol === 'random' ? randomProtocol() : this.protocol;
  }

  private getDomain() {
    return (this.useRandomDomain ? randomDomain() : this.urlDomain).toLowerCase();
  }

  private getPath() {
    return (this.useRandomPath ? randomUrlPath() : this.urlPath).join('/');
  }

  https() {
    this.protocol = 'https://';
    return this;
  }

  http() {
    this.protocol = 'http://';
  }

  inheritedProtocol() {
    this.protocol = '//';
    return this;
  }

  domain(domain: string) {
    this.useRandomDomain = false;
    this.urlDomain = domain;
    return this;
  }

  path(path: string[]) {
    this.useRandomPath = false;
    this.urlPath = path;
    return this;
  }

  randomPath() {
    this.useRandomPath = true;
    return this;
  }

  generate() {
    const protocol = this.getProtocol();
    const domain = this.getDomain();
    const path = this.getPath();

    return `${protocol}${domain}/${path}`;
  }
}

export const url = () => new ApeUrl();
